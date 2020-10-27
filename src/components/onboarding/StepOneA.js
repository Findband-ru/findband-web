import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton, TextField } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Policy from "../PolicyFooter";
import useStyles from "../../style/onboardingStyles/stepOneAStyle";

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
            Введи номер телефона
          </Typography>
          <Typography className={classes.textDesclaimer}>
            Только для авторизации, звонить не будем
          </Typography>
        </div>
        <TextField
          classes={{ root: classes.inputName }}
          id="outlined-basic"
          variant="outlined"
          placeholder="+7 (000) 000 00 00"
        />
        <Button className={classes.nextButton} onClick={props.setStep}>
          <Typography className={classes.textButton}>Продолжить</Typography>
        </Button>
        <div style={{ flexDirection: "row" }}>
          <Typography className={classes.textUnderButton}>
            Напиши нам, если нужна помощь
          </Typography>
        </div>
      </div>
      <div style={{ marginTop: "282px" }}>
        <Policy />
      </div>
    </div>
  );
}
