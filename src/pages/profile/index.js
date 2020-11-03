import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import useStyles from "../../style/profilePageStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Settings from "@material-ui/icons/Settings";
import StarBorder from "@material-ui/icons/StarBorder";
import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import ShareIcon from "@material-ui/icons/Share";
import { firebaseProject } from "../../../firebaseConfig";

export default function ProfilePage() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [images, setImages] = useState("");
  const [mySkill, setMySkill] = useState([]);
  const [findSkill, setFindSkill] = useState([]);
  const [about, setAbout] = useState("");

  const user = firebaseProject.auth().currentUser;

  const userInfo = firebaseProject
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        setName(doc.data().name);
        setImages(doc.data().images);
        setMySkill(doc.data().mySkill);
        setFindSkill(doc.data().findSkill);
        setAbout(doc.data().about);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });

  return (
    <div>
      <main className={classes.container}>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: 500,
                  marginLeft: 300,
                }}
              >
                <Typography className={classes.title}>Мой профиль</Typography>
                <IconButton aria-label="settings">
                  <Settings />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <Sidebar />
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={images}
            title="Profile Image"
          >
            <IconButton
              className={classes.heartIcon}
              aria-label="add to favorites"
            >
              <StarBorder />
            </IconButton>
          </CardMedia>
          <CardContent>
            <div>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.text}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ fontWeight: 700 }}
              >
                {mySkill}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ fontWeight: 700 }}
              >
                {findSkill}
              </Typography>
              <Typography
                variant="body2"
                className={classes.text}
                component="p"
              >
                {about}
              </Typography>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="go to telegram">
              <Telegram />
            </IconButton>
            <IconButton aria-label="go to instagram">
              <Instagram />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        {/* })}} */}
      </main>
    </div>
  );
}
