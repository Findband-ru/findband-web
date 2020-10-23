import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import Category from "../utils/CategoryList";
import Policy from "../utils/PolicyFooter";

import useStyles from "../../style/onboardingStyles/stepTwoThreeStyle";
import { Button } from "@material-ui/core";

export default function StepTwo(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div>
        <AppBar className={classes.grow} position="static" color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Button style={{ textTransform: "none" }} onClick={props.setStep}>
            <Typography className={classes.skipText}>Пропустить</Typography>
          </Button>
        </AppBar>
      </div>
      <div>
        <Typography className={classes.titleMe}>Я...</Typography>
      </div>
      <Category />
      <Policy />
    </div>
  );
}
