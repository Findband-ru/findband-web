import React from "react";
import { withRouter } from "next/router";
import SignUp from "../../components/onboarding/SignUp";
import StepOne from "../../components/onboarding/StepOne";
import StepTwo from "../../components/onboarding/StepTwo";
import StepThree from "../../components/onboarding/StepThree";
import StepFour from "../../components/onboarding/StepFour";
import StepFive from "../../components/onboarding/StepFive";
import { firebaseProject } from "../../../firebaseConfig";

class Registration extends React.Component {
  state = {
    step: 0,
    mySkill: [],
    findSkill: [],
    images: [],
    name: "",
    about: "",
    userId: null,
    errorMsg: null,
    isError: false,
  };

  uploadImages = () =>
    this.state.images.map(async (img) => {
      const bucketPath = "/images/" + this.state.userId + "/" + img.file.name;
      await firebaseProject.storage().ref(bucketPath).put(img.file);
      const url = await firebaseProject
        .storage()
        .ref(bucketPath)
        .getDownloadURL();
      return url;
    });

  createUser = async () => {
    const findbandUsers = firebaseProject.firestore().collection("users");
    const imagesUrls = await this.uploadImages();

    findbandUsers
      .doc(this.state.userId)
      .set({
        mySkill: this.state.mySkill,
        findSkill: this.state.findSkill,
        name: this.state.name,
        about: this.state.about,
        images: await Promise.all(imagesUrls),
      })
      .then(() => {
        console.log("Document successfully written!");
        this.props.setPageType(0);
        this.props.setIsOnboard(false);
        this.props.router.push("/");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  handleLogin = (email, password) => {
    this.clearErrors();
    console.log(email, password);
    firebaseProject
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("uid", user.uid);
        this.props.setPageType(0);
        this.props.setIsOnboard(false);
        this.props.router.push("/");
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            this.setState({ errorMsg: err.message, isError: true });
            break;
          case "auth/wrong-password":
            this.setState({ errorMsg: err.message, isError: true });
            break;
        }
      });
  };

  handleSignup = (email, password) => {
    this.clearErrors();
    firebaseProject
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("uid", user.uid);
        this.setState({ userId: user.uid });
        setStep();
        setPageType(3);
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            this.setState({ errorMsg: err.message, isError: true });
            break;
          case "auth/weak-password":
            this.setState({ errorMsg: err.message, isError: true });
            break;
        }
      });
  };

  signInWithGoogle = () => {
    const auth = firebaseProject.auth();
    const googleProvider = new firebaseProject.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProvider).then((res) => {
      console.log(res.user.displayName, res.user.email, res.user.uid);

      firebaseProject
        .firestore()
        .collection("users")
        .doc(res.user.uid)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            this.setState({
              step: 2,
              name: res.user.displayName,
              userId: res.user.uid,
            });
          } else {
            this.props.setPageType(0);
            this.props.setIsOnboard(false);
            this.props.router.push("/");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  updateStateArray = (array, label) => {
    let categoryArr = this.state[array];

    if (!categoryArr.includes(label)) {
      categoryArr.push(label);
    } else {
      categoryArr = categoryArr.filter((skill) => skill !== label);
    }
    this.setState({ [array]: categoryArr });
  };

  updateUserCredits = (stateValue, value) => {
    this.setState({
      [stateValue]: value,
    });
    setTimeout(() => console.log(this.state), 0);
  };

  clearErrors = () => {
    this.setState({ errorMsg: null });
  };

  setStep = () => {
    switch (this.state.step) {
      case 1:
        return (
          <SignUp
            setStep={() => this.setState({ step: 2 })}
            handleLogin={this.handleLogin}
            handleSignup={this.handleSignup}
            setPageType={this.props.setPageType}
            setIsOnboard={this.props.setIsOnboard}
            isError={this.state.isError}
            errorMessage={this.state.errorMsg}
          />
        );
      case 2:
        return (
          <StepTwo
            setStep={() => this.setState({ step: 3 })}
            setPageType={this.props.setPageType}
            setCategory={(label) => {
              this.updateStateArray("mySkill", label);
            }}
          />
        );
      case 3:
        return (
          <StepThree
            setStep={() => this.setState({ step: 4 })}
            setPageType={this.props.setPageType}
            setCategory={(label) => {
              this.updateStateArray("findSkill", label);
            }}
          />
        );
      case 4:
        return (
          <StepFour
            setStep={() => this.setState({ step: 5 })}
            setPageType={this.props.setPageType}
          />
        );
      case 5:
        return (
          <StepFive
            updateUserCredits={this.updateUserCredits}
            getImages={(images) => this.setState({ images })}
            createUser={this.createUser}
            name={this.state.name}
          />
        );
      default:
        return (
          <StepOne
            setStep={() => this.setState({ step: 1 })}
            signInWithGoogle={this.signInWithGoogle}
          />
        );
    }
  };

  render() {
    return this.setStep();
  }
}

export default withRouter(Registration);
