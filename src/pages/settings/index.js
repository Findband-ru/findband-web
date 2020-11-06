import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { settingsStyle } from "../../style/settingsStyle";
import { Typography } from "@material-ui/core";

// import { firebaseProject } from "../../../firebaseConfig";
// import { Link } from "@material-ui/core";

const SettingPage = ({ classes }) => {
  const router = useRouter();

  //   const user = firebaseProject.auth().currentUser;

  //   user.updateProfile({
  //     displayName: "Jane Q. User",
  //     photoURL: "https://example.com/jane-q-user/profile.jpg"
  //   }).then(function() {
  //     // Update successful.
  //   }).catch(function(error) {
  //     // An error happened.
  //   });

  return (
    <div>
      <main className={classes.container}></main>
    </div>
  );
};

export default withStyles(settingsStyle)(SettingPage);
