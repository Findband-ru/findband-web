import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import useStyles from "../style/firstEnterStyle";

import { Button, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Facebook from "@material-ui/icons/Facebook";
import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";

export default function FirstEnter() {
  const classes = useStyles();

  return (
    <div className={classes.mainPage}>
      <div className={classes.grow}>
        <AppBar
          position="static"
          color="transparent"
          style={{
            boxShadow: "none",
            borderBottom: "2px solid #F3F3F5",
            margin: "0 auto",
            width: 1200,
            alignItems: "center",
          }}
        >
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
            <IconButton style={{ paddingLeft: 150 }}>
              <Link href="/">
                <Close />
              </Link>
            </IconButton>
          </Typography>
        </AppBar>
      </div>
      <div className={classes.root}>
        <div>
          <Typography className={classes.textTitle}>
            Вход и регистрация
          </Typography>
          <Typography className={classes.textDesclaimer}>
            С профилем можно общаться с другими музыкантами,
          </Typography>
          <Typography className={classes.textDesclaimer}>
            добавлять их в избранное и делиться своей музыкой
          </Typography>
          <Link href="/mePage">
            <Button className={classes.phoneButton}>
              <Typography className={classes.textButton}>
                По телефону
              </Typography>
            </Button>
          </Link>
        </div>
        <Typography className={classes.textUnderButton}>
          или с помощью
        </Typography>
        <div>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#4680C2" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#E7E7EB" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            className={classes.socialButtons}
            style={{ backgroundColor: "#007AFF" }}
          >
            <Facebook />
          </IconButton>
        </div>
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
