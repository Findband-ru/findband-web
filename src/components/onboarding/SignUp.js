import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Policy from "../PolicyFooter";
import useStyles from "../../style/onboardingStyles/signUpStyle";
import { firebaseProject } from "../../../firebaseConfig";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export default function SignUp({ handleLogin, handleSignup, setStep }) {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const authListener = () => {
    firebaseProject.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

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
          <FormControl variant="outlined" classes={{ root: classes.inputName }}>
            <InputLabel htmlFor="component-outlined">
              Введи адрес электронной почты
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              type="email"
              value={email}
              label="Введи адрес электронной почты"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </div>
        <div style={{ marginTop: 15 }}>
          <FormControl variant="outlined" classes={{ root: classes.inputName }}>
            <InputLabel htmlFor="component-outlined">Введи пароль</InputLabel>
            <OutlinedInput
              id="component-outlined"
              type="password"
              value={password}
              label="Введи адрес электронной почты"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </div>
      </div>
      <div className={classes.root}>
        {hasAccount ? (
          <>
            <Button
              className={classes.nextButton}
              onClick={() => {
                setStep();
                handleLogin(email, password);
              }}
            >
              <Typography className={classes.textButton}>Войти</Typography>
            </Button>
            <Typography style={{ marginTop: 7, textAlign: "right" }}>
              Нет аккаунта?{" "}
              <span
                onClick={() => setHasAccount(!hasAccount)}
                style={{
                  color: "#FA5821",
                  fontWeight: 600,
                }}
              >
                Зарегистрироваться
              </span>
            </Typography>
          </>
        ) : (
          <>
            <Button
              className={classes.nextButton}
              onClick={() => {
                setStep();
                handleSignup(email, password);
              }}
            >
              <Typography className={classes.textButton}>
                Зарегистрироваться
              </Typography>
            </Button>
            <Typography style={{ marginTop: 7, textAlign: "right" }}>
              Есть аккаунт?{" "}
              <span
                onClick={() => setHasAccount(!hasAccount)}
                style={{
                  color: "#FA5821",
                  fontWeight: 600,
                }}
              >
                Войти
              </span>
            </Typography>
          </>
        )}
      </div>
      <div style={{ marginTop: "282px" }}>
        <Policy />
      </div>
    </div>
  );
}
