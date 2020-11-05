import React from "react";
import { withStyles } from "@material-ui/core";
import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
import { buttonStyle } from "./style";
import { firebaseProject } from "../../../firebaseConfig";
import useStyles from "./style";

const handleLogout = () => {
  firebaseProject.auth().signOut();
};

function Auth({ userId, classes }) {
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

export default withStyles(buttonStyle)(Auth);
