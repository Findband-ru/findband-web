import React from "react";
import { withStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocationOn from "@material-ui/icons/LocationOn";
import Tune from "@material-ui/icons/Tune";
import Auth from "../buttons/AuthButton";
import { Link } from "@material-ui/core";
import Setting from "../../../public/svg/icons/setting.svg";
import { navStyle } from "./style";
import IconButton from "@material-ui/core/IconButton";
import Close from "../../../public/svg/icons/close.svg";

export default function Navbar(props) {
  const { userId, pageType, setPageType, classes } = props;

  switch (pageType) {
    case 1:
      return (
        <div className={classes.grow} color="transparent">
          <Toolbar>
            <span className={classes.title}>Findband</span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: 500,
                marginLeft: 250,
              }}
            >
              <span className={classes.title}>Мой профиль</span>
              <Link href="/settings">
                <IconButton aria-label="settings">
                  <Setting />
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </div>
      );
    /* Ввод эл.почты/логина */
    case 2:
      return (
        <div className={classes.grow} color="transparent">
          <span className={classes.title}>
            Findband
            <IconButton style={{ left: "15%" }}>
              <Link href="/">
                <Close />
              </Link>
            </IconButton>
          </span>
        </div>
      );
    /* Выбор категории "Я/Ищу" */
    case 3:
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
            <Button
              style={{ left: "15%" }}
              // onClick={() => {
              //   setPageType(4);
              // }}
            >
              <Typography className={classes.skipText}>Далее</Typography>
            </Button>
          </Typography>
        </div>
      );
    case 4:
      return (
        <div className={classes.grow} color="transparent">
          <span className={classes.title}>Findband</span>
          <Link href="/">
            <span className={classes.skipText}>На главную</span>
          </Link>
        </div>
      );
    default:
      return (
        <div className={classes.grow} color="transparent">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Findband
            </Typography>
            <Auth userId={userId} setPageType={setPageType} />
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
              <span>Санкт-Петербург</span>
            </Button>
            <Button className={classes.navbarBtns}>
              <Tune style={{ marginRight: "9px" }} />
              <span style={{ textTransform: "none" }}>Фильтры</span>
            </Button>
          </Toolbar>
        </div>
      );
  }
}

export default withStyles(navStyle)(Navbar);
