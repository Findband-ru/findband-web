import React from "react";

import { IconButton } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";

import useStyles from "../style/policyFooterStyle";

export default function Policy() {
  const classes = useStyles();

  return (
    <div className={classes.policySection}>
      <div style={{ marginTop: "120px" }}>
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
  );
}
