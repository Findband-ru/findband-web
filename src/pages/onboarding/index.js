import React from "react";
import StepOne from "../../components/onboarding/StepOne";
import StepOneA from "../../components/onboarding/StepOneA";
import StepOneB from "../../components/onboarding/StepOneB";
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
    name: "",
    about: "",
  };

  createUser = () => {
    const findbandUsers = firebaseProject.firestore().collection("users");

    findbandUsers
      .doc()
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
      default:
        return <StepOne setStep={() => this.setState({ step: 5 })} />;
    }
  };

  render() {
    return this.setStep();
  }
}

export default Registration;
