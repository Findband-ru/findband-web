import React from "react";
import { useRouter } from "next/router";
import { Typography, Button, withStyles } from "@material-ui/core";
import { headerStyle } from "./style";
import ShevronLeft from "../../../public/svg/icons/shevronLeft.svg";
import { navBarTypes } from "../../constants/index";

function HeaderSettings({ classes, navBar, changeNavBar }) {
  const router = useRouter();

  switch (navBar) {
    case navBarTypes.editMusic:
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          {/* <div className={classes.editProfile}> */}
          <Button
            onClick={() => {
              changeNavBar(navBarTypes.profile);
              router.back();
            }}
          >
            <ShevronLeft />
          </Button>
          <Typography className={classes.title}>Ред. музыку</Typography>
          <Button style={{ textTransform: "none" }}>
            <Typography className={classes.saveBtn}>Сохранить</Typography>
          </Button>
          {/* </div> */}
        </div>
      );
    case navBarTypes.editSearch:
      return (
        <div className={classes.grow} color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <div className={classes.editProfile}>
            <Button
              onClick={() => {
                changeNavBar(navBarTypes.profile);
                router.back();
              }}
            >
              <ShevronLeft />
            </Button>
            <Typography className={classes.title}>Ред. музыку</Typography>
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
          <div className={classes.editProfile}>
            <Button
              onClick={() => {
                changeNavBar(navBarTypes.profile);
                router.back();
              }}
            >
              <ShevronLeft />
            </Button>
            <Typography className={classes.title}>Ред. профиль</Typography>
            <Button style={{ textTransform: "none" }}>
              <Typography className={classes.saveBtn}>Сохранить</Typography>
            </Button>
          </div>
        </div>
      );
  }
}

export default withStyles(headerStyle)(HeaderSettings);
