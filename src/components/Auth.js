import React from "react";
import { Button } from "@material-ui/core";

export default function Auth() {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "#FA5821",
        color: "white",
        borderRadius: "26px",
        marginLeft: "180px",
        marginRight: "35px",
        textTransform: "none",
      }}
    >
      Войти
    </Button>
  );
}
