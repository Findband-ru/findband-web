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

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div>
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
            <ListItem button classes={{ button: classes.sidebarButton }}>
              <ListItemIcon>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText
                primary="Войти"
                classes={{ primary: classes.sideBarText }}
              />
            </ListItem>
            <ListItem button classes={{ button: classes.sidebarButton }}>
              <ListItemIcon>
                <EventNote />
              </ListItemIcon>
              <ListItemText
                primary="Лента"
                classes={{ primary: classes.sideBarText }}
              />
            </ListItem>
            <ListItem button classes={{ button: classes.sidebarButton }}>
              <ListItemIcon>
                <FavoriteBorder />
              </ListItemIcon>
              <ListItemText
                primary="Избранные"
                classes={{ primary: classes.sideBarText }}
              />
            </ListItem>
            <ListItem button classes={{ button: classes.sidebarButton }}>
              <ListItemIcon>
                <ChatBubbleOutline />
              </ListItemIcon>
              <ListItemText
                primary="Сообщения"
                classes={{ primary: classes.sideBarText }}
              />
            </ListItem>
          </List>
          <div style={{ marginTop: "410px" }}>
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
      </Drawer>
    </div>
  );
}
