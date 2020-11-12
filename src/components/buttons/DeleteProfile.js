import React from "react";
import { useRouter } from "next/router";
import { withStyles } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { buttonStyle } from "./style";
import { firebaseProject } from "../../../firebaseConfig";

const handleLogout = () => {
  firebaseProject.auth().signOut();
};

function Delete({ classes, userId }) {
  const router = useRouter();

  return (
    <div style={{ marginLeft: "50%", marginTop: 100 }}>
      <Button
        variant="contained"
        className={classes.deleteButton}
        onClick={() => {
          const deleteUser = firebaseProject
            .functions()
            .httpsCallable("deleteUser");
          deleteUser({ userId }).then((result) => {
            console.log(result);
          });

          const clearUserData = firebaseProject
            .firestore()
            .collection("users")
            .doc(userId);

          clearUserData
            .delete()
            .then(() => {
              console.log("Document successfully deleted!");
              handleLogout();
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });

          router.push("/");
        }}
      >
        <Typography className={classes.deleteBtnText}>
          Удалить профиль
        </Typography>
      </Button>
    </div>
  );
}

export default withStyles(buttonStyle)(Delete);
