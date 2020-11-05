import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainPage: {
    display: "absolute",
    flexDirection: "column",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 800,
    margin: "0 auto",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 700,
    fontStyle: "normal",
    marginTop: 40,
    color: "#161931",
    textAlign: "center",
  },
  textDesclaimer: {
    fontSize: 17,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#7C7E8F",
    marginBottom: 5,
    marginTop: 20,
  },
  inputName: {
    width: 500,
    height: 52,
    marginTop: 10,
    borderRadius: 16,
  },
  textButton: {
    fontSize: 17,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#fff",
    textTransform: "none",
  },
  nextButton: {
    backgroundColor: "#FA5821",
    borderRadius: 26,
    width: 528,
    height: 52,
    marginTop: 55,
  },
}));

export default useStyles;
