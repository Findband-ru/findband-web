import React from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Policy from "../utils/PolicyFooter";

import useStyles from "../../style/onboardingStyles/stepFourStyle";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function StepFour(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div>
        <AppBar className={classes.grow} position="static" color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Link href="/">
            <Typography className={classes.skipText}>Пропустить</Typography>
          </Link>
        </AppBar>
      </div>
      <div>
        <Typography className={classes.aboutTitle}>Расскажи о себе</Typography>
      </div>
      <div>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Typography className={classes.subtitle}>
            Загрузи фотографии
          </Typography>
        </label>
      </div>
      <div className={classes.textInputBlock}>
        <Typography className={classes.nameText}>Имя</Typography>
        <TextField
          classes={{ root: classes.inputName }}
          id="outlined-basic"
          variant="outlined"
        />
        <div style={{ width: "100%" }}>
          <Typography className={classes.nameText}>Био</Typography>
          <Typography className={classes.symbolLimit}>
            До 160 символов
          </Typography>
        </div>
        <TextareaAutosize
          className={classes.textArea}
          rowsMin={6}
          placeholder="Расскажите о себе..."
        />
      </div>
      <Typography className={classes.fotoText}>Фотографии</Typography>
      <div className={classes.imageGroup}>
        <img className={classes.imageItem} src="/example1.png" alt="my image" />
        <img className={classes.imageItem} src="/example2.png" alt="my image" />
        <img className={classes.imageItem} src="/example1.png" alt="my image" />
        <img className={classes.imageItem} src="/example2.png" alt="my image" />
      </div>
      <Button variant="contained" className={classes.nextButton}>
        <Button
          style={{ textTransform: "none", color: "#fff" }}
          onClick={props.setStep}
        >
          <Typography className={classes.nextText}>Продолжить</Typography>
        </Button>
      </Button>
      <div style={{ marginTop: -50 }}>
        <Policy />
      </div>
    </div>
  );
}
