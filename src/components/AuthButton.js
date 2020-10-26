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
      <Button variant="contained" className={classes.signinButton}>
        <Link href="/onboarding">
          <Typography className={classes.signinText}>Войти</Typography>
        </Link>
      </Button>
    </Tooltip>
  );
}
