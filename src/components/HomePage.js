import React from "react";
import FeedCards from "./Feed";
import useStyles from "../style/sidebarStyle";

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FeedCards />
    </div>
  );
}
