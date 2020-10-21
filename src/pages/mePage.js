import React from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import { Button, IconButton } from "@material-ui/core";

import { CheckBox } from "@material-ui/icons";

import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import Album from "@material-ui/icons/Album";

import useStyles from "../style/mePageStyle";

export default function Me() {
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
          <Link href="/findoutPage">
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
        <Typography className={classes.titleMe}>Я...</Typography>
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
      <div className={classes.policySection}>
        <div style={{ marginTop: "350px" }}>
          <IconButton aria-label="go to instagram">
            <Instagram className={classes.sidebarSocialIcon} />
          </IconButton>
          <IconButton aria-label="go to twitter">
            <Twitter className={classes.sidebarSocialIcon} />
          </IconButton>
          <IconButton aria-label="go to telegram">
            <Telegram className={classes.sidebarSocialIcon} />
          </IconButton>
          <Typography className={classes.policyText}>
            Политика конфиденциальности
          </Typography>
          <Typography className={classes.policyText}>
            Условия использования
          </Typography>
          <Typography className={classes.policyText}>
            Рекламные документы
          </Typography>
        </div>
        <Typography className={classes.projectNameText}>
          © FINDBAND.RU 2020
        </Typography>
      </div>
    </div>
  );
}
