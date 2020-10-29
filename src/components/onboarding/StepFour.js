import React, { useState } from "react";
import Link from "next/link";
import ImageUploading from "react-images-uploading";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Policy from "../PolicyFooter";
import useStyles from "../../style/onboardingStyles/stepFourStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function StepFour({ updateUserCredits, setStep, createUser }) {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className={classes.main}>
      <div>
        <AppBar className={classes.grow} position="static" color="transparent">
          <Typography className={classes.title} variant="h6" noWrap>
            Findband
          </Typography>
          <Link href="/">
            <Typography className={classes.skipText}>Пропустить</Typography>
          </Link>
        </AppBar>
      </div>
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
        onClick={() => {
          setStep();
          createUser();
        }}
        variant="contained"
        className={classes.nextButton}
      >
        <Typography className={classes.nextText}>Продолжить</Typography>
      </Button>
      <div style={{ marginTop: -50 }}>
        <Policy />
      </div>
    </div>
  );
}
