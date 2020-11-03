import React from "react";
import StepOne from "../../components/onboarding/StepOne";
import StepTwo from "../../components/onboarding/StepTwo";
import StepThree from "../../components/onboarding/StepThree";
import StepFour from "../../components/onboarding/StepFour";
import StepFive from "../../components/onboarding/StepFive";
import SignUp from "../../components/onboarding/SignUp";
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
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  handleLogin = (email, password) => {
    // this.clearErrors();
    console.log(email, password);
    firebaseProject
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("uid", user.uid);
        this.setState({ userId: user.uid });
      })
      .catch((err) => {
        console.log(err);
        // switch (err.code) {
        //   case "auth/invalid-email":
        //   case "auth/user-disabled":
        //   case "auth/user-not-found":
        //     setEmailError(err.message);
        //     break;
        //   case "auth/wrong-password":
        //     setPasswordError(err.message);
        //     break;
        // }
      });
  };

  handleSignup = (email, password) => {
    // this.clearErrors();
    firebaseProject
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("uid", user.uid);
        this.setState({ userId: user.uid });
      })
      .catch((err) => {
        console.log(err);
        // switch (err.code) {
        //   case "auth/email-already-in-use":
        //   case "auth/invalid-email":
        //     setEmailError(err.message);
        //     break;
        //   case "auth/weak-password":
        //     setPasswordError(err.message);
        //     break;
        // }
      });
  };

  // clearErrors = () => {
  //   setEmailError("");
  //   setPasswordError("");
  // };

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

  setStep = () => {
    switch (this.state.step) {
      case 1:
        return (
          <SignUp
            setStep={() => this.setState({ step: 2 })}
            handleLogin={this.handleLogin}
            handleSignup={this.handleSignup}
          />
        );
      case 2:
        return (
          <StepTwo
            setStep={() => this.setState({ step: 3 })}
            setCategory={(label) => {
              this.updateStateArray("mySkill", label);
            }}
          />
        );
      case 3:
        return (
          <StepThree
            setStep={() => this.setState({ step: 4 })}
            setCategory={(label) => {
              this.updateStateArray("findSkill", label);
            }}
          />
        );
      case 4:
        return <StepFour setStep={() => this.setState({ step: 5 })} />;
      case 5:
        return (
          <StepFive
            updateUserCredits={this.updateUserCredits}
            getImages={(images) => this.setState({ images })}
            createUser={this.createUser}
          />
        );
      default:
        return <StepOne setStep={() => this.setState({ step: 1 })} />;
    }
  };

  render() {
    return this.setStep();
  }
}

export default Registration;
