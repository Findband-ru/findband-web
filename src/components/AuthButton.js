import React from "react";
import Link from "next/link";
import { Button, Typography } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import useStyles from "../style/authStyle";
import { firebaseProject } from "../../firebaseConfig";

const handleLogout = () => {
  firebaseProject.auth().signOut();
};

export default function Auth(props) {
  const classes = useStyles();
  const user = firebaseProject.auth().currentUser;

  return (
    <Tooltip
      title="Регистрация позволяет выкладывать музыку, общаться с другими музыкантами и добавлять в избранное"
      arrow={true}
      fontSize={25}
    >
      {user === null ? (
        <Link href="/onboarding">
          <Button variant="contained" className={classes.signinButton}>
            <Typography className={classes.signinText}>Войти</Typography>
          </Button>
        </Link>
      ) : (
        <Link href="/">
          <Button
            variant="contained"
            className={classes.signinButton}
            onClick={() => handleLogout()}
          >
            <Typography className={classes.signinText}>Выйти</Typography>
          </Button>
        </Link>
      )}
    </Tooltip>
  );
}
