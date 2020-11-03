import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import Policy from "../PolicyFooter";
import useStyles from "../../style/onboardingStyles/stepOneStyle";

export default function StepOne(props) {
  const classes = useStyles();

  return (
    <div className={classes.mainPage}>
      <AppBar className={classes.grow} position="static" color="transparent">
        <Typography className={classes.title} variant="h6" noWrap>
          Findband
          <IconButton style={{ marginLeft: 150, marginRight: 175 }}>
            <Link href="/">
              <Close />
            </Link>
          </IconButton>
        </Typography>
      </AppBar>
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
        <Button className={classes.phoneButton} onClick={props.setStep}>
          <Typography className={classes.textButton}>
            По электронной почте
          </Typography>
        </Button>
        <Typography className={classes.textUnderButton}>
          или с помощью
        </Typography>
        <div>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#4680C2" }}
          >
            <FontAwesomeIcon icon={faVk} size="lg" color="#fff" />
          </IconButton>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#E7E7EB" }}
          >
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </IconButton>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#007AFF" }}
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" color="#fff" />
          </IconButton>
        </div>
      </div>
      <div style={{ marginTop: "282px" }}>
        <Policy />
      </div>
    </div>
  );
}
