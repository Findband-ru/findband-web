import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton, TextField } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Policy from "../PolicyFooter";
import useStyles from "../../style/onboardingStyles/signInStyle";

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
        <Typography className={classes.textTitle}>
          Вход и регистрация
        </Typography>
        <div style={{ marginTop: 30 }}>
          <Typography className={classes.textDesclaimer}>
            Введи адрес электронной почты
          </Typography>
        </div>
        <TextField
          classes={{ root: classes.inputName }}
          variant="outlined"
          placeholder="example@example.com"
        />
        <div>
          <Typography className={classes.textDesclaimer}>
            Введи пароль
          </Typography>
        </div>
        <TextField
          classes={{ root: classes.inputName }}
          variant="outlined"
          placeholder="**********"
        />
        <Button className={classes.nextButton} onClick={props.setStep}>
          <Typography className={classes.textButton}>Войти</Typography>
        </Button>
      </div>
      <div style={{ marginTop: "282px" }}>
        <Policy />
      </div>
    </div>
  );
}
