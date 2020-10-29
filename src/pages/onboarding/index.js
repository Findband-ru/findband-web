import React from "react";
import StepOne from "../../components/onboarding/StepOne";
import StepOneA from "../../components/onboarding/StepOneA";
import StepOneB from "../../components/onboarding/StepOneB";
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
    name: "",
    about: "",
    userId: null,
  };

  createUser = () => {
    const findbandUsers = firebaseProject.firestore().collection("users");

    findbandUsers
      .doc(this.state.userId)
      .set({
        mySkill: this.state.mySkill,
        findSkill: this.state.findSkill,
        name: this.state.name,
        about: this.state.about,
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
    firebaseProject
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(error);
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
        console.log(error);
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

  handleLogout = () => {
    firebaseProject.auth().signOut();
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

  setStep = () => {
    switch (this.state.step) {
      case 1:
        return (
          <StepTwo
            setStep={() => this.setState({ step: 2 })}
            setCategory={(label) => {
              this.updateStateArray("mySkill", label);
            }}
          />
        );
      case 2:
        return (
          <StepThree
            setStep={() => this.setState({ step: 3 })}
            setCategory={(label) => {
              this.updateStateArray("findSkill", label);
            }}
          />
        );
      case 3:
        return (
          <StepFour
            setStep={() => this.setState({ step: 4 })}
            updateUserCredits={this.updateUserCredits}
            createUser={this.createUser}
          />
        );
      case 4:
        return <StepFive setStep={() => this.setState({ step: 3 })} />;
      case 5:
        return <StepOneA setStep={() => this.setState({ step: 6 })} />;
      case 6:
        return <StepOneB setStep={() => this.setState({ step: 1 })} />;
      case 7:
        return (
          <SignUp
            setStep={() => this.setState({ step: 1 })}
            handleLogin={this.handleLogin}
            handleSignup={this.handleSignup}
          />
        );
      default:
        return <StepOne setStep={() => this.setState({ step: 7 })} />;
    }
  };

  render() {
    return this.setStep();
  }
}

export default Registration;
