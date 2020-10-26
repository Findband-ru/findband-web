import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { Button } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import LocationOn from "@material-ui/icons/LocationOn";
import Tune from "@material-ui/icons/Tune";

import useStyles from "../style/navbarStyle";

import Auth from "./AuthButton";

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        color="transparent"
        style={{
          boxShadow: "none",
          borderBottom: "2px solid #F3F3F5",
          margin: "0 auto",
          width: 1200,
        }}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Auth />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Поиск"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button className={classes.navbarBtns}>
            <LocationOn style={{ marginRight: "9px" }} />
            <Typography>Санкт-Петербург</Typography>
          </Button>
          <Button className={classes.navbarBtns}>
            <Tune style={{ marginRight: "9px" }} />
            <Typography style={{ textTransform: "none" }}>Фильтры</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
