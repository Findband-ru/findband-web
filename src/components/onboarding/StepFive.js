import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import Link from "next/link";
import ImageUploading from "react-images-uploading";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Policy from "../policy/PolicyFooter";
import { stepFiveStyle } from "./styles/stepFiveStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import CitiesList from "./cityList/ChooseCity";

function StepFive({ updateUserCredits, createUser, getImages, classes, name }) {
  const [images, setImages] = useState([]);

  const onChange = (imageList) => {
    getImages(imageList);
    setImages(imageList);
  };

  return (
    <div className={classes.main}>
      <div>
        <Typography className={classes.aboutTitle}>Расскажи о себе</Typography>
      </div>
      <div>
        <div>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={4}
            dataURLKey="data_url"
          >
            {({ onImageUpload }) => (
              <div>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={onImageUpload}
                >
                  <Typography className={classes.subtitle}>
                    Загрузи фотографии
                  </Typography>
                </Button>
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
      <div className={classes.textInputBlock}>
        <Typography className={classes.nameText}>Имя</Typography>
        <TextField
          classes={{ root: classes.inputName }}
          value={name}
          variant="outlined"
          onChange={(event) =>
            updateUserCredits("name", event.currentTarget.value)
          }
        />
        <div style={{ width: "100%" }}>
          <Typography className={classes.nameText}>Био</Typography>
          <Typography className={classes.symbolLimit}>
            До 160 символов
          </Typography>
        </div>
        <TextareaAutosize
          className={classes.textArea}
          rowsMin={6}
          placeholder="Расскажи о себе..."
          onChange={(event) =>
            updateUserCredits("about", event.currentTarget.value)
          }
        />
        <Typography className={classes.nameText}>Город</Typography>
        <CitiesList />
      </div>
      <Typography className={classes.fotoText}>Фотографии</Typography>
      <div>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({ imageList, onImageRemove }) => (
            <div className={classes.imageGroup}>
              {imageList.map((image, index) => (
                <div style={{ display: "flex", position: "relative" }}>
                  <img
                    key={index}
                    className={classes.imageItem}
                    src={image.data_url}
                  />
                  <IconButton className={classes.closeIcon}>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      onClick={() => onImageRemove(index)}
                    />
                  </IconButton>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
      <Button
        style={{ textTransform: "none", color: "#fff" }}
        onClick={createUser}
        variant="contained"
        className={classes.nextButton}
      >
        <Typography className={classes.nextText}>Сохранить профиль</Typography>
      </Button>
      <div>
        <Policy />
      </div>
    </div>
  );
}

export default withStyles(stepFiveStyle)(StepFive);
