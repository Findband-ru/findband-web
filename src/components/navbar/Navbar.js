import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocationOn from "@material-ui/icons/LocationOn";
import Tune from "@material-ui/icons/Tune";
import useStyles from "./style";
import Auth from "../buttons/AuthButton";
import { Link } from "@material-ui/core";
import Setting from "../../../public/svg/icons/setting.svg";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

export default function Navbar(props) {
  const { userId, pageType } = props;
  console.log(props);
  const classes = useStyles();

  switch (pageType) {
    case 1:
      return (
        <div className={classes.grow} color="transparent">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Findband
            </Typography>
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
              <Typography className={classes.title}>Мой профиль</Typography>
              <Link href="/settings">
                <IconButton aria-label="settings">
                  <Setting />
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </div>
      );
    case 2:
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
            <IconButton style={{ marginLeft: 150, marginRight: 175 }}>
              <Link href="/">
                <Close />
              </Link>
            </IconButton>
          </Typography>
        </div>
      );
    case 3:
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Button style={{ textTransform: "none" }} onClick={props.setStep}>
            <Typography className={classes.skipText}>Далее</Typography>
          </Button>
        </div>
      );
    case 4:
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Link href="/">
            <Typography className={classes.skipText}>На главную</Typography>
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
            <Auth userId={userId} />
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
        </div>
      );
  }
}
