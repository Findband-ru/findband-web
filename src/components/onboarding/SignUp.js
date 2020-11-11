import React, { useState } from "react";
import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  withStyles,
} from "@material-ui/core";

import { signUpStyle } from "./styles/signUpStyle";

function SignUp({ handleLogin, handleSignup, classes, isError, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className={classes.root}>
      <Typography className={classes.textTitle}>Вход и регистрация</Typography>
      <div style={{ marginTop: 30 }}>
        <FormHelperText
          error={isError}
          disabled={true}
          className={classes.errMessage}
        >
          {errorMessage}
        </FormHelperText>
        <FormControl variant="outlined" classes={{ root: classes.inputName }}>
          <InputLabel htmlFor="component-outlined">
            Введи адрес электронной почты
          </InputLabel>
          <OutlinedInput
            error={isError}
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
            error={isError}
            type="password"
            value={password}
            label="Введи адрес электронной почты"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
      </div>
      {hasAccount ? (
        <>
          <Button
            className={classes.nextButton}
            onClick={() => handleSignup(email, password)}
          >
            <Typography className={classes.textButton}>
              Зарегистрироваться
            </Typography>
          </Button>
          <Typography
            style={{
              textAlign: "right",
              maxWidth: 645,
              marginBottom: 16,
            }}
          >
            Есть аккаунт?{" "}
            <span
              className={classes.hasAccount}
              onClick={() => setHasAccount(!hasAccount)}
            >
              Войти
            </span>
          </Typography>
        </>
      ) : (
        <>
          <Button
            className={classes.nextButton}
            onClick={() => handleLogin(email, password)}
          >
            <Typography className={classes.textButton}>Войти</Typography>
          </Button>
          <Typography
            style={{
              textAlign: "right",
              maxWidth: 645,
              marginBottom: 16,
            }}
          >
            Нет аккаунта?{" "}
            <span
              className={classes.hasAccount}
              onClick={() => setHasAccount(!hasAccount)}
            >
              Зарегистрироваться
            </span>
          </Typography>
        </>
      )}
    </div>
  );
}

export default withStyles(signUpStyle)(SignUp);
