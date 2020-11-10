import React from "react";
import { Typography, Button, withStyles } from "@material-ui/core";
import Category from "../categoryUser/CategoryUser";
import { stepTwoThreeStyle } from "./styles/stepTwoThreeStyle";

function StepTwo({ setCategory, setPageType, setStep, classes }) {
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.titleMe}>Я...</Typography>
      </div>
      <Category setCategory={setCategory} />
      <Button
        variant="contained"
        className={classes.nextButton}
        onClick={() => {
          setStep();
          setPageType(3);
        }}
      >
        <Typography className={classes.nextBtnText}>Продолжить</Typography>
      </Button>
    </div>
  );
}

export default withStyles(stepTwoThreeStyle)(StepTwo);
