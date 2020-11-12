import React from "react";
import { useRouter } from "next/router";
import { Button, Typography, IconButton, withStyles } from "@material-ui/core";
import Messages from "../../../public/svg/icons/messages.svg";
import Feed from "../../../public/svg/icons/feed.svg";
import User from "../../../public/svg/icons/user.svg";
import Like from "../../../public/svg/icons/like.svg";
import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import { sidebarStyle } from "./style";

function Sidebar({ userId, classes }) {
  const router = useRouter();

  return (
    <div className={classes.container}>
      {userId === null ? (
        <div>
          <Button
            className={classes.sidebarButton}
            onClick={() => router.push("/onboarding")}
          >
            <User />
            <Typography className={classes.sideBarText}>Войти</Typography>
          </Button>
        </div>
      ) : (
        <div>
          <Button
            className={classes.sidebarButton}
            onClick={() => {
              router.push("/profile");
            }}
          >
            <User />
            <Typography className={classes.sideBarText}>Профиль</Typography>
          </Button>
        </div>
      )}
      <div>
        <Button
          className={classes.sidebarButton}
          onClick={() => router.push("/")}
        >
          <Feed />
          <Typography className={classes.sideBarText}>Лента</Typography>
        </Button>
      </div>
      <div>
        <Button className={classes.sidebarButton}>
          <Like />
          <Typography className={classes.sideBarText}>Избранные</Typography>
        </Button>
      </div>
      <div>
        <Button className={classes.sidebarButton}>
          <Messages />
          <Typography className={classes.sideBarText}>Сообщения</Typography>
        </Button>
      </div>
      <div className={classes.policyContainer}>
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

export default withStyles(sidebarStyle)(Sidebar);
