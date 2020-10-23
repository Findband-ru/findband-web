import React from "react";

import PeopleOutline from "@material-ui/icons/PeopleOutline";
import Album from "@material-ui/icons/Album";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Equalizer from "@material-ui/icons/Equalizer";
import MusicVideo from "@material-ui/icons/MusicVideo";
import Straighten from "@material-ui/icons/Straighten";
import AllInclusive from "@material-ui/icons/AllInclusive";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";

import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faUsers,
  faUserGraduate,
  faGraduationCap,
  faFeatherAlt,
  faMicrophone,
  faCompactDisc,
  faSchool,
  faSearchDollar,
  faCheckCircle,
  faDrum,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import * as styles from "../../style/categoryListStyle";

function Category({ classes }) {
  return (
    <div className={classes.buttonGroup}>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faUsers}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Группа</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faGuitar}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Гитарист</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <Equalizer className={classes.piktograms} />
        <Typography className={classes.buttonText}>Битмэйкер</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <RecordVoiceOver className={classes.piktograms} />
        <Typography className={classes.buttonText}>Битбоксер</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Организатор</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faUserGraduate}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Ученик</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faFeatherAlt}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Автор</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faGuitar}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Басист</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Рэпер</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faSearchDollar}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Продюсер</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <Album className={classes.piktograms} />
        <Typography className={classes.buttonText}>Духовые</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faSchool}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Муз.школа</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faDrum}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Ударник</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faMicrophone}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Вокалист</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <Straighten className={classes.piktograms} />
        <Typography className={classes.buttonText}>Клавишник</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faCompactDisc}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Промоутер</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <FontAwesomeIcon
          icon={faGraduationCap}
          size="lg"
          className={classes.piktograms}
        />
        <Typography className={classes.buttonText}>Учитель</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <MusicVideo className={classes.piktograms} />
        <Typography className={classes.buttonText}>Реп.база</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
      <Button className={classes.button}>
        <AllInclusive className={classes.piktograms} />
        <Typography className={classes.buttonText}>Другое</Typography>
        <Checkbox
          icon={<RadioButtonUnchecked style={{ display: "none" }} />}
          checkedIcon={
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#FA5821" }}
            />
          }
        />
      </Button>
    </div>
  );
}

export default withStyles(styles)(Category);
