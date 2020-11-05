import React from "react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Category from "../categoryUser/CategoryUser";
import Policy from "../policy/PolicyFooter";
import { stepTwoThreeStyle } from "./styles/stepTwoThreeStyle";
import { Button } from "@material-ui/core";

function StepThree({ setCategory, classes }) {
  return (
    <div className={classes.main}>
      <div>
        <Typography className={classes.titleMe}>Ищу...</Typography>
      </div>
      <Category setCategory={setCategory} />
      <Policy />
    </div>
  );
}

export default withStyles(stepTwoThreeStyle)(StepThree);
