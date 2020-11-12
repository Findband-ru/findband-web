import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { settingsStyle } from "../../style/settingsStyle";
import HeaderSettings from "../../components/settings/Header";
import Delete from "../../components/buttons/DeleteProfile";

// import { firebaseProject } from "../../../firebaseConfig";

class SettingPage extends React.Component {
  state = {
    move: 0,
  };
  //   const user = firebaseProject.auth().currentUser;

  //   user.updateProfile({
  //     displayName: "Jane Q. User",
  //     photoURL: "https://example.com/jane-q-user/profile.jpg"
  //   }).then(function() {
  //     // Update successful.
  //   }).catch(function(error) {
  //     // An error happened.
  //   });
  render() {
    return (
      <>
        <HeaderSettings changeNavBar={this.props.changeNavBar} />
        <Delete userId={this.props.userId} />
      </>
    );
  }
}

export default withStyles(settingsStyle)(SettingPage);
