import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import StarBorder from "@material-ui/icons/StarBorder";
import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import ShareIcon from "@material-ui/icons/Share";
import { profileStyle } from "../../style/profileStyle";
import AudioPlayer from "../../components/AudioPlayer/index";
import { firebaseProject } from "../../../firebaseConfig";
import { navBarTypes } from "../../constants/index";

const ProfilePage = ({ userId, classes, changeNavBar }) => {
  const [name, setName] = useState("");
  const [images, setImages] = useState("");
  const [mySkill, setMySkill] = useState([]);
  const [findSkill, setFindSkill] = useState([]);
  const [about, setAbout] = useState("");
  const [audio, setAudio] = useState("");

  useEffect(() => {
    changeNavBar(navBarTypes.profile);
    firebaseProject
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setName(doc.data().name);
          setImages(doc.data().images);
          setMySkill(doc.data().mySkill);
          setFindSkill(doc.data().findSkill);
          setAbout(doc.data().about);
          setAudio(doc.data().audio);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={images[0] !== undefined ? images[0] : "/noimageavailable.png"}
          title="Profile Image"
        >
          <IconButton
            className={classes.heartIcon}
            aria-label="add to favorites"
          >
            <StarBorder style={{ fontSize: 40 }} />
          </IconButton>
          {audio !== null && (
            <div
              style={{
                position: "absolute",
                cursor: "pointer",
                backgroundColor: "#fff",
                borderRadius: 50,
                borderWidth: 1,
                bottom: -35,
                right: 15,
              }}
            >
              <AudioPlayer src={audio} autoPlay={false} />
            </div>
          )}
        </CardMedia>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.title}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontWeight: 700 }}
          >
            {mySkill.join(", ")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontWeight: 700 }}
          >
            <span style={{ fontWeight: 400 }}>Ищу </span> {findSkill.join(", ")}
          </Typography>
          <Typography variant="body2" className={classes.text} component="p">
            {about}
          </Typography>
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
    </div>
  );
};

export default withStyles(profileStyle)(ProfilePage);
