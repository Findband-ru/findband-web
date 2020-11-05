import React from "react";
import { withStyles } from "@material-ui/core";
import { stepTwoThreeStyle } from "./styles/stepTwoThreeStyle";
import Typography from "@material-ui/core/Typography";
import Category from "../categoryUser/CategoryUser";
import Policy from "../policy/PolicyFooter";
import useStyles from "./styles/stepTwoThreeStyle";
import Next from "../buttons/NextButton";

function StepThree({ setCategory, setStep, classes }) {
  return (
    <div className={classes.main}>
      <div>
        <Typography className={classes.titleMe}>Ищу...</Typography>
      </div>
      <Category setCategory={setCategory} />
      <Next setStep={() => setStep({ step: 4 })} />
      <Policy />
    </div>
  );
}

export default withStyles(stepTwoThreeStyle)(StepThree);
