import React from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import useStyles from "../../style/topBarStyle";

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <AppBar className={classes.grow} position="static" color="transparent">
        <Typography className={classes.title} variant="h6" noWrap>
          Findband
        </Typography>
        <Link href="/findoutPage">
          <Typography className={classes.skipText}>Пропустить</Typography>
        </Link>
      </AppBar>
    </div>
  );
}
