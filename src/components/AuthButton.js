import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import useStyles from "../style/authStyle";

export default function Auth() {
  const classes = useStyles();

  return (
    <Tooltip
      title="Регистрация позволяет выкладывать музыку, общаться с другими музыкантами и добавлять в избранное"
      arrow={true}
      fontSize={25}
    >
      <Link href="/onboarding">
        <Button variant="contained" className={classes.signinButton}>
          <Typography className={classes.signinText}>Войти</Typography>
        </Button>
      </Link>
    </Tooltip>
  );
}
