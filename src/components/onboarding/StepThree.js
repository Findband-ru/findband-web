import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { stepTwoThreeStyle } from "./styles/stepTwoThreeStyle";
import Category from "../categoryUser/CategoryUser";
import Next from "../buttons/NextButton";

function StepThree({ setCategory, setStep, classes }) {
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.titleMe}>Ищу...</Typography>
      </div>
      <Category setCategory={setCategory} />
      <Next setStep={() => setStep({ step: 4 })} />
    </div>
  );
}

export default withStyles(stepTwoThreeStyle)(StepThree);
