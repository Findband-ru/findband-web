import React from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Policy from "../components/utils/PolicyFooter";

import useStyles from "../style/loadTrackStyle";

export default function Me() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div>
        <AppBar className={classes.grow} position="static" color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Link href="/editProfilePage">
            <Typography className={classes.skipText}>Пропустить</Typography>
          </Link>
        </AppBar>
      </div>
      <div className={classes.block}>
        <Typography className={classes.loadTitle}>Загрузи свой трек</Typography>
        <Typography className={classes.subtitle}>
          Его будут слушать другие пользователи из твоей карточки
        </Typography>
      </div>
      <div className={classes.block}>
        <Button
          variant="contained"
          className={classes.loadButtons}
          style={{ backgroundColor: "#F3F3F5" }}
        >
          <Typography className={classes.buttonsText} style={{ color: "#000" }}>
            Загрузить с устройства
          </Typography>
        </Button>
        <Button
          variant="contained"
          className={classes.loadButtons}
          style={{ background: "#FF5500" }}
        >
          <Typography className={classes.buttonsText}>
            Выбрать на Sound Cloud
          </Typography>
        </Button>
        <Button
          variant="contained"
          className={classes.loadButtons}
          style={{ background: "#0061FF" }}
        >
          <Typography className={classes.buttonsText}>
            Выбрать на Dropbox
          </Typography>
        </Button>
      </div>
      <Policy />
    </div>
  );
}
