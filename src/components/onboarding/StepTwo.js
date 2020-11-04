import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Category from "../categoryUser/CategoryUser";
import Policy from "../policy/PolicyFooter";
import useStyles from "./styles/stepTwoThreeStyle";
import Button from "@material-ui/core/Button";

export default function StepTwo(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div>
        <Typography className={classes.titleMe}>Я...</Typography>
      </div>
      <Category setCategory={props.setCategory} />
      <Policy />
    </div>
  );
}
