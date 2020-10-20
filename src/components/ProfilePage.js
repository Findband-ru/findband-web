import React from "react";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import LocationOn from "@material-ui/icons/LocationOn";
import StarBorder from "@material-ui/icons/StarBorder";
import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import ShareIcon from "@material-ui/icons/Share";
import Settings from "@material-ui/icons/Settings";

import * as styles from "../style/profileCardStyle";

import { firebaseProject } from "../../firebaseConfig";

import Player from "../components/Player";

class Profile extends React.Component {
  state = {
    docProfile: null,
  };

  componentDidMount() {
    const findbandUsers = firebaseProject.firestore().collection("users");

    findbandUsers
      .get()
      .then((querySnapshot) => {
        const profiles = [];
        querySnapshot.forEach(function (doc) {
          profiles.push(doc.data());
        });
        console.log("profiles", profiles);

        this.setState({ docProfile: profiles });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.feed}>
        {this.state.docProfile !== null &&
          this.state.docProfile.map((item, ind) => {
            return (
              <ListItem className={classes.profileCard}>
                <Card className={classes.root}>
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <Settings />
                      </IconButton>
                    }
                    title="Мой профиль"
                    classes={{ title: classes.cardTitleText }}
                  />
                  <CardMedia
                    className={classes.media}
                    image="/profileImage.png"
                    title="Profile Image"
                  >
                    {/* <IconButton
            className={classes.heartIcon}
            aria-label="add to favorites"
          >
            <FavoriteBorder />
          </IconButton> */}
                    <IconButton
                      className={classes.heartIcon}
                      aria-label="add to favorites"
                    >
                      <StarBorder />
                    </IconButton>
                    {/* <Player /> */}
                  </CardMedia>
                  <CardContent>
                    <div>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ fontSize: 24, fontWeight: 700, color: "#000" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {/* <LocationOn
                          style={{ marginRight: "9px" }}
                          fontSize="small"
                        /> */}
                        {item.location}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.about}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        +7 {item.phone}
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
              </ListItem>
            );
          })}
      </List>
    );
  }
}

export default withStyles(styles)(Profile);
