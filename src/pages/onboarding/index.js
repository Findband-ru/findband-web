import React from "react";

import StepOne from "../../components/onboarding/StepOne";
import StepTwo from "../../components/onboarding/StepTwo";
import StepThree from "../../components/onboarding/StepThree";
import StepFour from "../../components/onboarding/StepFour";
import StepFive from "../../components/onboarding/StepFive";

class Registration extends React.Component {
  state = {
    step: 0,
  };

  setStep = () => {
    switch (this.state.step) {
      case 1:
        return <StepTwo setStep={() => this.setState({ step: 2 })} />;
      case 2:
        return <StepThree setStep={() => this.setState({ step: 3 })} />;
      case 3:
        return <StepFour setStep={() => this.setState({ step: 4 })} />;
      case 4:
        return <StepFive setStep={() => this.setState({ step: 3 })} />;
      default:
        return <StepOne setStep={() => this.setState({ step: 1 })} />;
    }
  };

  render() {
    return this.setStep();
  }
}

export default Registration;
