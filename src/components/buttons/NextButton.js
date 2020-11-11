import React from "react";
import { withStyles } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { buttonStyle } from "./style";

function Next({ classes, setStep }) {
  return (
    <div>
      <Button
        variant="contained"
        className={classes.nextButton}
        onClick={() => setStep()}
      >
        <Typography className={classes.nextBtnText}>Продолжить</Typography>
      </Button>
    </div>
  );
}

export default withStyles(buttonStyle)(Next);
