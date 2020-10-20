import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
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

import useStyles from "../style/sidebarStyle";

import Profile from "./ProfilePage";

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <PersonOutline />
                </ListItemIcon>
                <ListItemText
                  primary="Войти"
                  classes={{ primary: classes.sideBarText }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EventNote />
                </ListItemIcon>
                <ListItemText
                  primary="Лента"
                  classes={{ primary: classes.sideBarText }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FavoriteBorder />
                </ListItemIcon>
                <ListItemText
                  primary="Избранные"
                  classes={{ primary: classes.sideBarText }}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ChatBubbleOutline />
                </ListItemIcon>
                <ListItemText
                  primary="Сообщения"
                  classes={{ primary: classes.sideBarText }}
                />
              </ListItem>
            </List>
            <div style={{ marginTop: "420px" }}>
              <IconButton aria-label="go to twitter">
                <Twitter />
              </IconButton>
              <IconButton aria-label="go to telegram">
                <Telegram />
              </IconButton>
              <IconButton aria-label="go to instagram">
                <Instagram />
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
            <Typography className={classes.policyText}>
              © FINDBAND.RU 2020
            </Typography>
          </div>
        </Drawer>
        <Toolbar />
        <Profile />
      </main>
    </div>
  );
}
