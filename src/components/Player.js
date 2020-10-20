import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";

export default function Player() {
  return (
    <IconButton aria-label="play sample">
      <PlayCircleFilled color="#FA5821" style={{ marginLeft: "180px" }} />
    </IconButton>
  );
}
