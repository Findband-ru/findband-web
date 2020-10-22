import React from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import useStyles from "../style/categoryPageStyle";

import Category from "../components/utils/CategoryList";
import Policy from "../components/utils/PolicyFooter";

export default function Findout() {
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
      <div>
        <Typography className={classes.titleMe}>Ищу...</Typography>
      </div>
      <Category />
      <Policy />
    </div>
  );
}
