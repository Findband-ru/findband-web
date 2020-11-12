import React from "react";
import { Typography, Button, IconButton, withStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { stepOneStyle } from "./styles/stepOneStyle";

function StepOne({ setStep, classes, signInWithGoogle, signInWithFacebook }) {
  return (
    <div className={classes.mainPage}>
      <div className={classes.root}>
        <div style={{ textAlign: "center" }}>
          <Typography className={classes.textTitle}>
            Вход и регистрация
          </Typography>
          <Typography className={classes.textDesclaimer}>
            С профилем можно общаться с другими музыкантами,
          </Typography>
          <Typography className={classes.textDesclaimer}>
            добавлять их в избранное и делиться своей музыкой
          </Typography>
        </div>
        <div>
          <Button className={classes.emailButton} onClick={setStep}>
            <Typography className={classes.textButton}>
              По электронной почте
            </Typography>
          </Button>
          <Typography
            className={classes.textUnderButton}
            style={{ textAlign: "center" }}
          >
            или с помощью
          </Typography>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#4680C2" }}
          >
            <FontAwesomeIcon icon={faVk} size="lg" color="#fff" />
          </IconButton>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#E7E7EB" }}
            onClick={signInWithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </IconButton>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#007AFF" }}
            onClick={signInWithFacebook}
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" color="#fff" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default withStyles(stepOneStyle)(StepOne);
