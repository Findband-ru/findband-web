import React from "react";
import Link from "next/link";
import { Typography, InputBase, Button, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocationOn from "@material-ui/icons/LocationOn";
import Tune from "@material-ui/icons/Tune";
import Auth from "../buttons/AuthButton";
import { navStyle } from "./style";
import Setting from "../../../public/svg/icons/setting.svg";
import { navBarTypes } from "../../constants/index";

function Navbar({ userId, navBar, changeNavBar, classes }) {
  switch (navBar) {
    case navBarTypes.onboarding:
      return <div style={{ display: "none" }} />;
    case navBarTypes.setting:
      return <div style={{ display: "none" }} />;
    case navBarTypes.profile:
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Typography className={classes.title} style={{ marginLeft: 10 }}>
            Мой профиль
          </Typography>
          <Link href="/settings">
            <Button onClick={() => changeNavBar(navBarTypes.setting)}>
              <Setting />
            </Button>
          </Link>
        </div>
      );
    default:
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Auth userId={userId} changeNavBar={changeNavBar} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Поиск"
              style={{ marginLeft: 35, padding: 5 }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button className={classes.navbarBtns}>
            <LocationOn style={{ marginRight: "9px" }} />
            <span>Санкт-Петербург</span>
          </Button>
          <Button className={classes.navbarBtns}>
            <Tune style={{ marginRight: "9px" }} />
            <span style={{ textTransform: "none" }}>Фильтры</span>
          </Button>
        </div>
      );
  }
}

export default withStyles(navStyle)(Navbar);
