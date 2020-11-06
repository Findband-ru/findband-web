import React from "react";
import Link from "next/link";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import Policy from "../policy/PolicyFooter";
import { stepFourStyle } from "./styles/stepFourStyle";
// import Next from "../buttons/NextButton";

function StepFour({ classes, setPageType, setStep }) {
  return (
    <div className={classes.main}>
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
        >
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
      <Link href="/onboarding">
        <Button
          variant="contained"
          className={classes.nextButton}
          onClick={() => {
            setStep();
            setPageType(4);
          }}
        >
          <Typography className={classes.nextBtnText}>Продолжить</Typography>
        </Button>
      </Link>
      <Policy />
    </div>
  );
}

export default withStyles(stepFourStyle)(StepFour);
