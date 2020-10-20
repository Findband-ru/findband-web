import React from "react";

import FeedCards from "./Feed";
import Sidebar from "./Sidebar";

import useStyles from "../style/sidebarStyle";

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Sidebar />
        <FeedCards />
      </main>
    </div>
  );
}
