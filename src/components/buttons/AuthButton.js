import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./style";
import { firebaseProject } from "../../../firebaseConfig";

const handleLogout = () => {
  firebaseProject.auth().signOut();
};

export default function Auth({ userId }) {
  const classes = useStyles();

  return (
    <>
      {userId === null ? (
        <Link href="/onboarding">
          <Button variant="contained" className={classes.signinButton}>
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
    </>
  );
}
