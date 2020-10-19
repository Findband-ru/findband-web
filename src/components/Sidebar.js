import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import EventNote from "@material-ui/icons/EventNote";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import PersonOutline from "@material-ui/icons/PersonOutline";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";

import useStyles from "../style/sidebarStyle";

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
              <ListItemText primary="Войти" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EventNote />
              </ListItemIcon>
              <ListItemText primary="Лента" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FavoriteBorder />
              </ListItemIcon>
              <ListItemText primary="Избранные" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ChatBubbleOutline />
              </ListItemIcon>
              <ListItemText primary="Сообщения" />
            </ListItem>
          </List>
          <Divider />
          <div style={{ marginTop: "500px" }}>
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
      <main className={classes.content}>
        <Toolbar />
        <Typography>Контент</Typography>
      </main>
    </div>
  );
}
