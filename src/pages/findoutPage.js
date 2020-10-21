import React from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import { Button, IconButton } from "@material-ui/core";

import { CheckBox } from "@material-ui/icons";

import PeopleOutline from "@material-ui/icons/PeopleOutline";
import Album from "@material-ui/icons/Album";

import useStyles from "../style/mePageStyle";

export default function Findout() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div>
        <AppBar
          className={classes.grow}
          position="static"
          color="transparent"
          style={{
            boxShadow: "none",
            borderBottom: "2px solid #F3F3F5",
            margin: "0 auto",
            width: 1200,
          }}
        >
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Link href="/">
            <Typography
              className={classes.skipText}
              style={{ marginLeft: 200 }}
            >
              Пропустить
            </Typography>
          </Link>
        </AppBar>
      </div>
      <div>
        <Typography className={classes.titleMe}>Ищу...</Typography>
      </div>
      <div className={classes.buttonGroup}>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <Album />
          <Typography className={classes.buttonText}>Промоутер</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button
          className={classes.button}
          classes={{ grouped: classes.buttonGroup }}
        >
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <Album />
          <Typography className={classes.buttonText}>Промоутер</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <Album />
          <Typography className={classes.buttonText}>Промоутер</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button
          className={classes.button}
          classes={{ grouped: classes.buttonGroup }}
        >
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <Album />
          <Typography className={classes.buttonText}>Промоутер</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>{" "}
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <Album />
          <Typography className={classes.buttonText}>Промоутер</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button
          className={classes.button}
          classes={{ grouped: classes.buttonGroup }}
        >
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <Album />
          <Typography className={classes.buttonText}>Промоутер</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
        <Button className={classes.button}>
          <PeopleOutline />
          <Typography className={classes.buttonText}>Группа</Typography>
          <CheckBox />
        </Button>
      </div>
    </div>
  );
}
