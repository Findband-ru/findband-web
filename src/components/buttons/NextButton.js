import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function Next({ setPageType, setStep }) {
  const classes = useStyles();

  return (
    <Link href="/onboarding">
      <Button
        variant="contained"
        className={classes.nextButton}
        onClick={() => {
          setStep();
        }}
      >
        <Typography className={classes.nextBtnText}>Продолжить</Typography>
      </Button>
    </Link>
  );
}
