import React from "react";
import {
  Typography,
  TextField,
  IconButton,
  Button,
  TextareaAutosize,
  withStyles,
} from "@material-ui/core";
import ImageUploading from "react-images-uploading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { stepFiveStyle } from "./styles/stepFiveStyle";
import CitiesList from "./cityList/ChooseCity";

function StepFive({
  updateUserCredits,
  createUser,
  getImages,
  classes,
  name,
  images,
}) {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography className={classes.aboutTitle}>Расскажи о себе</Typography>

        <ImageUploading
          multiple
          value={images}
          onChange={(imageList) => getImages(imageList)}
          maxNumber={4}
          dataURLKey="data_url"
        >
          {({ onImageUpload }) => (
            <div>
              <Button style={{ textTransform: "none" }} onClick={onImageUpload}>
                <Typography className={classes.subtitle}>
                  Загрузи фотографии
                </Typography>
              </Button>
            </div>
          )}
        </ImageUploading>
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
          onChange={(imageList) => getImages(imageList)}
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
    </div>
  );
}

export default withStyles(stepFiveStyle)(StepFive);
