import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Sidebar from "../../components/sidebar/Sidebar";
import { settingsStyle } from "../../style/settingsStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShevronLeft from "../../../public/svg/icons/shevronLeft.svg";
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

  //   firebaseProject
  //     .firestore()
  //     .collection("users")
  //     .doc(user.uid)
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         console.log("Document data:", doc.data());
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log("Error getting document:", error);
  //     });

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
                  marginLeft: 250,
                }}
              >
                <Button onClick={() => router.push("/profile")}>
                  <ShevronLeft />
                </Button>
                <Typography className={classes.title}>Ред. профиль</Typography>
                <Button style={{ textTransform: "none" }}>
                  <Typography className={classes.skipText}>
                    Сохранить
                  </Typography>
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <Sidebar />
      </main>
    </div>
  );
};

export default withStyles(settingsStyle)(SettingPage);
