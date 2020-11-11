import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import Category from "../categoryUser/CategoryUser";
import { stepTwoThreeStyle } from "./styles/stepTwoThreeStyle";
import Next from "../buttons/NextButton";

function StepTwo({ setCategory, setStep, classes }) {
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.titleMe}>Я...</Typography>
      </div>
      <Category setCategory={setCategory} />
      <Next setStep={() => setStep({ step: 3 })} />
    </div>
  );
}

export default withStyles(stepTwoThreeStyle)(StepTwo);
