import React from "react";
import { withStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventNote from "@material-ui/icons/EventNote";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import PersonOutline from "@material-ui/icons/PersonOutline";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import IconButton from "@material-ui/core/IconButton";
import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import { sidebarStyle } from "./style";

function Sidebar({ userId, setIsProfile, setPageType, classes }) {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <List>
        {userId === null ? (
          <ListItem>
            <button
              onClick={() => {
                setPageType(2);
                router.push("/onboarding");
              }}
              classes={{ button: classes.sidebarButton }}
            >
              <ListItemIcon>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText
                primary="Войти"
                classes={{ primary: classes.sideBarText }}
              />
            </button>
          </ListItem>
        ) : (
          <ListItem>
            <button
              onClick={() => {
                setIsProfile(true);
                setPageType(1);
                router.push("/profile");
              }}
              classes={{ button: classes.sidebarButton }}
            >
              <ListItemIcon>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText
                primary="Профиль"
                classes={{ primary: classes.sideBarText }}
              />
            </button>
          </ListItem>
        )}
        <ListItem>
          <button
            onClick={() => {
              setIsProfile(false);
              setPageType(0);
              router.push("/");
            }}
            primary="Лента"
            classes={{ primary: classes.sideBarText }}
          >
            <ListItemIcon>
              <EventNote />
            </ListItemIcon>
            <ListItemText />
          </button>
        </ListItem>
        <ListItem>
          <button className={classes.sidebarButton}>
            <ListItemIcon>
              <FavoriteBorder />
            </ListItemIcon>
            <ListItemText
              primary="Избранные"
              classes={{ primary: classes.sideBarText }}
            />
          </button>
        </ListItem>
        <ListItem>
          <button className={classes.sidebarButton}>
            <ListItemIcon>
              <ChatBubbleOutline />
            </ListItemIcon>
            <ListItemText
              primary="Сообщения"
              classes={{ primary: classes.sideBarText }}
            />
          </button>
        </ListItem>
      </List>
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
