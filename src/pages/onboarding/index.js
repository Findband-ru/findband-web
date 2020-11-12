import React from "react";
import { withRouter } from "next/router";
import SignUp from "../../components/onboarding/SignUp";
import StepOne from "../../components/onboarding/StepOne";
import StepTwo from "../../components/onboarding/StepTwo";
import StepThree from "../../components/onboarding/StepThree";
import StepFour from "../../components/onboarding/StepFour";
import StepFive from "../../components/onboarding/StepFive";
import { firebaseProject } from "../../../firebaseConfig";
import Policy from "../../components/policy/PolicyFooter";
import HeaderOnboard from "../../components/onboarding/Header";
import { navBarTypes, stepsOnboard } from "../../constants/index";

class Registration extends React.Component {
  state = {
    step: 0,
    name: "",
    about: "",
    mySkill: [],
    findSkill: [],
    images: [],
    audio: null,
    userId: null,
    errorMsg: null,
    isError: false,
  };

  componentDidMount() {
    this.props.changeNavBar(navBarTypes.onboarding);
  }

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

  uploadAudio = async () => {
    const bucketPath =
      "/audio/" + this.state.userId + "/" + this.state.audio.name;
    await firebaseProject.storage().ref(bucketPath).put(this.state.audio);
    const url = await firebaseProject
      .storage()
      .ref(bucketPath)
      .getDownloadURL();
    return url;
  };

  createUser = async () => {
    const findbandUsers = firebaseProject.firestore().collection("users");
    const imagesUrls = await this.uploadImages();
    let audioUrl = null;
    if (this.state.audio) {
      audioUrl = await this.uploadAudio();
    }
    findbandUsers
      .doc(this.state.userId)
      .set({
        mySkill: this.state.mySkill,
        findSkill: this.state.findSkill,
        name: this.state.name,
        about: this.state.about,
        images: await Promise.all(imagesUrls),
        audio: audioUrl,
        createdAt: firebaseProject.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("Document successfully written!");
        this.props.changeNavBar(navBarTypes.default);
        this.props.router.push("/");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  handleLogin = (email, password) => {
    this.clearErrors();
    firebaseProject
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("uid", user.uid);
        this.props.changeNavBar(navBarTypes.default);
        this.props.router.push("/");
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            this.setState({
              errorMsg: "Данной электронной почты не существует",
              isError: true,
            });
            break;
          case "auth/wrong-password":
            this.setState({
              errorMsg: "Неверный пароль",
              isError: true,
            });
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
        this.setState({ userId: user.uid, step: stepsOnboard.stepTwo });
        this.props.changeNavBar(navBarTypes.onboarding);
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            this.setState({
              errorMsg: "Неверный формат электронной почты",
              isError: true,
            });
            break;
          case "auth/weak-password":
            this.setState({
              errorMsg: "Незащищённый пароль",
              isError: true,
            });
            break;
        }
      });
  };

  signInWithGoogle = () => {
    const auth = firebaseProject.auth();
    const googleProvider = new firebaseProject.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider).then((res) => {
      firebaseProject
        .firestore()
        .collection("users")
        .doc(res.user.uid)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            this.setState({
              step: stepsOnboard.stepTwo,
              name: res.user.displayName,
              userId: res.user.uid,
            });
          } else {
            this.props.changeNavBar(navBarTypes.default);
            this.props.router.push("/");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  signInWithFacebook = () => {
    const auth = firebaseProject.auth();
    const facebookProvider = new firebaseProject.auth.FacebookAuthProvider();

    auth.signInWithPopup(facebookProvider).then((res) => {
      firebaseProject
        .firestore()
        .collection("users")
        .doc(res.user.uid)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            this.setState({
              step: stepsOnboard.stepTwo,
              name: res.user.displayName,
              userId: res.user.uid,
            });
          } else {
            this.props.changeNavBar(navBarTypes.default);
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

  updateUserCredits = (stateValue, value) =>
    this.setState({
      [stateValue]: value,
    });

  clearErrors = () => {
    this.setState({ errorMsg: null });
  };

  setStep = () => {
    switch (this.state.step) {
      case 1:
        return (
          <SignUp
            handleLogin={this.handleLogin}
            handleSignup={this.handleSignup}
            isError={this.state.isError}
            errorMessage={this.state.errorMsg}
          />
        );
      case 2:
        return (
          <StepTwo
            setStep={() => this.setState({ step: stepsOnboard.stepThree })}
            changeNavBar={this.props.changeNavBar}
            setCategory={(label) => {
              this.updateStateArray("mySkill", label);
            }}
          />
        );
      case 3:
        return (
          <StepThree
            setStep={() => this.setState({ step: stepsOnboard.stepFour })}
            changeNavBar={this.props.changeNavBar}
            setCategory={(label) => this.updateStateArray("findSkill", label)}
          />
        );
      case 4:
        return (
          <StepFour
            getAudio={(audio) => this.setState({ audio })}
            setStep={() => this.setState({ step: stepsOnboard.stepFive })}
            changeNavBar={this.props.changeNavBar}
          />
        );
      case 5:
        return (
          <StepFive
            updateUserCredits={this.updateUserCredits}
            getImages={(images) => this.setState({ images })}
            createUser={this.createUser}
            name={this.state.name}
            images={this.state.images}
          />
        );
      default:
        return (
          <StepOne
            setStep={() => this.setState({ step: stepsOnboard.signUp })}
            signInWithGoogle={this.signInWithGoogle}
            signInWithFacebook={this.signInWithFacebook}
          />
        );
    }
  };

  render() {
    return (
      <>
        <HeaderOnboard
          step={this.state.step}
          setStep={(newstep) => this.setState({ step: newstep })}
        />
        {this.setStep()}
        <div>
          <Policy />
        </div>
      </>
    );
  }
}

export default withRouter(Registration);
