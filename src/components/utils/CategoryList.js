import React from "react";

import PeopleOutline from "@material-ui/icons/PeopleOutline";
import Album from "@material-ui/icons/Album";

import Typography from "@material-ui/core/Typography";

import { Button } from "@material-ui/core";

import { CheckBox } from "@material-ui/icons";

import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

import useStyles from "../../style/categoryListStyle";

export default function Category() {
  const classes = useStyles();

  return (
    <div className={classes.buttonGroup}>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Группа</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <Album className={classes.piktograms} />
        <Typography className={classes.buttonText}>Гитарист</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Битмэйкер</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Битбоксер</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Организатор</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Ученик</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <Album className={classes.piktograms} />
        <Typography className={classes.buttonText}>Автор</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Басист</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Рэпер</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Продюсер</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <Album className={classes.piktograms} />
        <Typography className={classes.buttonText}>Духовые</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Муз.школа</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Ударник</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Вокалист</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <Album className={classes.piktograms} />
        <Typography className={classes.buttonText}>Клавишник</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Промоутер</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Учитель</Typography>
        <CheckBox />
      </Button>{" "}
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Реп.база</Typography>
        <CheckBox />
      </Button>
      <Button className={classes.button}>
        <PeopleOutline className={classes.piktograms} />
        <Typography className={classes.buttonText}>Другое</Typography>
        <CheckBox />
      </Button>
    </div>
  );
}
