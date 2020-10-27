import React from "react";
import { categories } from "./categories";
import { withStyles } from "@material-ui/core";
import * as styles from "../../style/categoryStyle";
import CategoryBtn from "./CategoryBtn";

function Category({ classes, setCategory }) {
  return (
    <div className={classes.buttonGroup}>
      {categories.map((category, index) => (
        <CategoryBtn
          label={category.label}
          key={index}
          icon={category.icon}
          classes={classes}
          setCategory={setCategory}
        />
      ))}
    </div>
  );
}

export default withStyles(styles)(Category);
