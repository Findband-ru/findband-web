import React from "react";
import Link from "next/link";
import { withStyles } from "@material-ui/core";
import { stepTwoThreeStyle } from "./styles/stepTwoThreeStyle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Category from "../categoryUser/CategoryUser";
import Policy from "../policy/PolicyFooter";
// import Next from "../buttons/NextButton";

function StepThree({ setCategory, setStep, setPageType, classes }) {
  return (
    <div className={classes.main}>
      <div>
        <Typography className={classes.titleMe}>Ищу...</Typography>
      </div>
      <Category setCategory={setCategory} />
      <Link href="/onboarding">
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
      </Link>
      <Policy style={{ marginTop: 40 }} />
    </div>
  );
}

export default withStyles(stepTwoThreeStyle)(StepThree);
