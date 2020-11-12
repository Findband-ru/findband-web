import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import Link from "next/link";
import { buttonStyle } from "./style";
import { firebaseProject } from "../../../firebaseConfig";

const handleLogout = () => {
  firebaseProject.auth().signOut();
};

function Auth({ userId, classes, changeNavBar }) {
  return (
    <div>
      {userId === null ? (
        <Link href="/onboarding">
          <Button
            variant="contained"
            className={classes.signinButton}
            onClick={() => changeNavBar(1)}
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

export default withStyles(buttonStyle)(Auth);
