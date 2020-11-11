import React from "react";
import { useRouter } from "next/router";
import { Typography, Button, withStyles } from "@material-ui/core";
import { headerStyle } from "./styles/headerStyle";
import ShevronLeft from "../../../public/svg/icons/shevronLeft.svg";

function HeaderOnboard({ classes, step, setStep }) {
  const router = useRouter();

  const goBack = () => {
    if (step === 0) {
      router.back();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className={classes.grow} color="transparent">
      <Button onClick={goBack}>
        <ShevronLeft />
      </Button>
      <Typography
        className={classes.title}
        style={{ alignSelf: "center" }}
        noWrap
      >
        Findband
      </Typography>
    </div>
  );
}

export default withStyles(headerStyle)(HeaderOnboard);
