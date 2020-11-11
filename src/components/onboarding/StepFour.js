import React from "react";
import { Input, Typography, Button, withStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { stepFourStyle } from "./styles/stepFourStyle";
import Next from "../buttons/NextButton";

function StepFour({ classes, setStep, getAudio }) {
  return (
    <div className={classes.root}>
      <div className={classes.block}>
        <Typography className={classes.loadTitle}>Загрузи свой трек</Typography>
        <Typography className={classes.subtitle}>
          Его будут слушать другие пользователи из твоей карточки
        </Typography>
      </div>
      <div className={classes.block}>
        <Button
          variant="contained"
          className={classes.loadButtons}
          style={{ backgroundColor: "#F3F3F5" }}
          onClick={() => {
            const audioInput = document.getElementById("audio");
            audioInput.click();
          }}
        >
          <Input
            type="file"
            id="audio"
            onChange={(event) => getAudio(event.target.files[0])}
            style={{ display: "none" }}
            fullWidth={true}
          />
          <FontAwesomeIcon
            icon={faLaptop}
            size="lg"
            style={{ marginRight: 50, color: "#000" }}
          />
          <Typography className={classes.buttonsText} style={{ color: "#000" }}>
            Загрузить с устройства
          </Typography>
        </Button>
        <Button
          variant="contained"
          className={classes.loadButtons}
          style={{ background: "#FF5500" }}
        >
          <FontAwesomeIcon
            icon={faSoundcloud}
            size="lg"
            style={{ marginRight: 50 }}
          />
          <Typography className={classes.buttonsText}>
            Выбрать на Sound Cloud
          </Typography>
        </Button>
        <Button
          variant="contained"
          className={classes.loadButtons}
          style={{ background: "#0061FF" }}
        >
          <FontAwesomeIcon
            icon={faDropbox}
            size="lg"
            style={{ marginRight: 50 }}
          />
          <Typography className={classes.buttonsText}>
            Выбрать на Dropbox
          </Typography>
        </Button>
      </div>
      <Next setStep={() => setStep({ step: 5 })} />
    </div>
  );
}

export default withStyles(stepFourStyle)(StepFour);
