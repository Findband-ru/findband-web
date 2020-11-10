import React from "react";
import { withStyles } from "@material-ui/core";
import { stepTwoThreeStyle } from "./styles/stepTwoThreeStyle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Category from "../categoryUser/CategoryUser";

function StepThree({ setCategory, setStep, setPageType, classes }) {
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.titleMe}>Ищу...</Typography>
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

export default withStyles(stepTwoThreeStyle)(StepThree);
