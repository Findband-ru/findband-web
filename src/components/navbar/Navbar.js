import React from "react";
import Link from "next/link";
import {
  Typography,
  InputBase,
  Button,
  IconButton,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocationOn from "@material-ui/icons/LocationOn";
import Tune from "@material-ui/icons/Tune";
import Auth from "../buttons/AuthButton";
import { navStyle } from "./style";
import ShevronLeft from "../../../public/svg/icons/shevronLeft.svg";
import Setting from "../../../public/svg/icons/setting.svg";

function Navbar({ userId, pageType, setPageType, classes }) {
  switch (pageType) {
    case 1:
      /* Раздел Onboarding */
      return <div style={{ display: "none" }} />;
    case 2:
      /* Страница профиля */
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Typography className={classes.title} style={{ marginLeft: 10 }}>
            Мой профиль
          </Typography>
          <Link href="/settings">
            <Button onClick={() => setPageType(5)}>
              <Setting />
            </Button>
          </Link>
        </div>
      );
    /* Страница редактирования профиля */
    case 5:
      return (
        <div className={classes.grow}>
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <div className={classes.editProfile}>
            <Button
              onClick={() => {
                setPageType(1);
                router.back();
              }}
            >
              <ShevronLeft />
            </Button>
            <Typography className={classes.title} style={{ marginLeft: 50 }}>
              Ред. профиль
            </Typography>
            <Button style={{ textTransform: "none" }}>
              <Typography className={classes.saveBtn}>Сохранить</Typography>
            </Button>
          </div>
        </div>
      );
    default:
      return (
        <div className={classes.grow} color="transparent">
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
