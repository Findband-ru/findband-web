import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "../style/firstEnterStyle";

export default function Auth() {
  const classes = useStyles();

  return (
    <Tooltip
      title="Регистрация позволяет выкладывать музыку, общаться с другими музыкантами и добавлять в избранное"
      arrow={true}
      fontSize={25}
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FA5821",
          color: "white",
          borderRadius: "26px",
          marginLeft: "180px",
          marginRight: "35px",
          textTransform: "none",
          textDecoration: "none",
        }}
      >
        <Link href="/firstEnterPage" classes={{ root: classes.textLink }}>
          Войти
        </Link>
      </Button>
    </Tooltip>
  );
}
