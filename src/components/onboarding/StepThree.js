import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Category from "../categoryUser/CategoryUser";
import Policy from "../policy/PolicyFooter";
import useStyles from "./styles/stepTwoThreeStyle";
import { Button } from "@material-ui/core";

export default function StepThree(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div>
        <Typography className={classes.titleMe}>Ищу...</Typography>
      </div>
      <Category setCategory={props.setCategory} />
      <Policy />
    </div>
  );
}
