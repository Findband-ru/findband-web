import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core";
import * as styles from "./style";

const CategoryBtn = ({ key, label, icon, classes, setCategory }) => {
  const [checked, setCheck] = useState(false);

  return (
    <Button
      key={key}
      id={label}
      className={classes.button}
      onClick={() => {
        setCheck(!checked);
        setCategory(label);
      }}
    >
      {icon}
      <Typography className={classes.buttonText}>{label}</Typography>
      {checked && (
        <FontAwesomeIcon icon={faCheckCircle} className={classes.checkedIcon} />
      )}
    </Button>
  );
};

export default withStyles(styles)(CategoryBtn);
