import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import useStyles from "../style/firstEnterStyle";

import { Button, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Facebook from "@material-ui/icons/Facebook";

import Policy from "../components/utils/PolicyFooter";

export default function FirstEnter() {
  const classes = useStyles();

  return (
    <div className={classes.mainPage}>
      <AppBar className={classes.grow} position="static" color="transparent">
        <Typography className={classes.title} variant="h6" noWrap>
          Findband
          <IconButton style={{ paddingLeft: 150, paddingRight: 175 }}>
            <Link href="/">
              <Close />
            </Link>
          </IconButton>
        </Typography>
      </AppBar>
      <div className={classes.root}>
        <div style={{ textAlign: "center" }}>
          <Typography className={classes.textTitle}>
            Вход и регистрация
          </Typography>
          <Typography className={classes.textDesclaimer}>
            С профилем можно общаться с другими музыкантами,
          </Typography>
          <Typography className={classes.textDesclaimer}>
            добавлять их в избранное и делиться своей музыкой
          </Typography>
        </div>
        <Link href="/mePage">
          <Button className={classes.phoneButton}>
            <Typography className={classes.textButton}>По телефону</Typography>
          </Button>
        </Link>
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
      <div style={{ marginTop: "282px" }}>
        <Policy />
      </div>
    </div>
  );
}
