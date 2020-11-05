import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
import { firebaseProject } from "../../../firebaseConfig";
import useStyles from "./style";

const handleLogout = () => {
  firebaseProject.auth().signOut();
};

export default function Auth({ userId, setPageType }) {
  const classes = useStyles();

  return (
    <div>
      {userId === null ? (
        <Link href="/onboarding">
          <Button
            variant="contained"
            className={classes.signinButton}
            onClick={() => setPageType(2)}
          >
            <Typography className={classes.signinBtnText}>Войти</Typography>
          </Button>
        </Link>
      ) : (
        <Link href="/">
          <Button
            variant="contained"
            className={classes.signinButton}
            onClick={() => handleLogout()}
          >
            <Typography className={classes.signinBtnText}>Выйти</Typography>
          </Button>
        </Link>
      )}
    </div>
  );
}
