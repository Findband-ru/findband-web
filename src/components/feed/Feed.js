import React from "react";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import StarBorder from "@material-ui/icons/StarBorder";
import Telegram from "@material-ui/icons/Telegram";
import Instagram from "@material-ui/icons/Instagram";
import ShareIcon from "@material-ui/icons/Share";
import * as styles from "./style";
import { firebaseProject } from "../../../firebaseConfig";
import AudioPlayer from "../../components/AudioPlayer/index";

class FeedCards extends React.Component {
  state = {
    docProfile: null,
  };

  componentDidMount() {
    const findbandUsers = firebaseProject.firestore().collection("users");

    findbandUsers
      .get()
      .then((querySnapshot) => {
        const profiles = [];
        querySnapshot.forEach((doc) => {
          profiles.push(doc.data());
        });
        this.setState({ docProfile: profiles });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <List className={classes.feed}>
          {this.state.docProfile !== null &&
            this.state.docProfile.map((item, ind) => {
              console.log(item.images[0]);
              return (
                <ListItem className={classes.profileCard} key={ind}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={
                        item.images[0] !== undefined
                          ? item.images[0]
                          : "/noimageavailable.png"
                      }
                      title="Profile Image"
                    >
                      <IconButton
                        className={classes.starIcon}
                        aria-label="add to favorites"
                      >
                        <StarBorder style={{ fontSize: 40 }} />
                      </IconButton>
                      {item.audio !== null && (
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
                          <AudioPlayer src={item.audio} autoPlay={false} />
                        </div>
                      )}
                    </CardMedia>
                    <CardContent>
                      <div>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{
                            fontSize: 24,
                            fontWeight: 700,
                            color: "#000",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.location}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{ fontWeight: 700 }}
                        >
                          {item.mySkill.join(", ")}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.about}
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
      </div>
    );
  }
}

export default withStyles(styles)(FeedCards);
