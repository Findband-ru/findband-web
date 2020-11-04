import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 500,
    marginTop: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CitiesList() {
  const classes = useStyles();
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={city}
        onChange={handleChange}
      >
        <MenuItem value="" disabled>
          Выбери свой город
        </MenuItem>
        <MenuItem value={"Москва"}>Москва</MenuItem>
        <MenuItem value={"Санкт-Петербург"}>Санкт-Петербург</MenuItem>
        <MenuItem value={"Екатеринбург"}>Екатеринбург</MenuItem>
        <MenuItem value={"Тверь"}>Тверь</MenuItem>
        <MenuItem value={"Пермь"}>Пермь</MenuItem>
        <MenuItem value={"Сочи"}>Сочи</MenuItem>
        <MenuItem value={"Тула"}>Тула</MenuItem>
        <MenuItem value={"Ульяновск"}>Ульяновск</MenuItem>
        <MenuItem value={"Краснодар"}>Краснодар</MenuItem>
        <MenuItem value={"Зеленоград"}>Зеленоград</MenuItem>
      </Select>
    </FormControl>
  );
}
