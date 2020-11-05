import React from "react";
import { withStyles } from "@material-ui/core";
import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
import { buttonStyle } from "./style";

function Next({ setPageType, setStep, classes }) {
  return (
    <Link href="/onboarding">
      <Button
        variant="contained"
        className={classes.nextButton}
        onClick={() => {
          setStep();
          // setPageType(4);
        }}
      >
        <Typography className={classes.nextBtnText}>Продолжить</Typography>
      </Button>
    </Link>
  );
}

export default withStyles(buttonStyle)(Next);
