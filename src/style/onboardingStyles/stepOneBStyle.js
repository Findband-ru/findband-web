import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  grow: {
    flexGrow: 1,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    boxShadow: "none",
    borderBottom: "2px solid #F3F3F5",
    margin: "0 auto",
    width: 800,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 800,
    margin: "0 auto",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: 24,
    fontWeight: 700,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 700,
    fontStyle: "normal",
    marginTop: 40,
    color: "#161931",
  },
  textDesclaimer: {
    fontSize: 17,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#7C7E8F",
    marginBottom: 25,
  },
  inputName: {
    width: 500,
    height: 52,
    marginTop: 10,
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
    marginTop: 24,
  },
  textUnderButton: {
    fontSize: 14,
    fontWeight: 400,
    fontStyle: "normal",
    marginTop: 20,
    color: "#7C7E8F",
  },
}));

export default useStyles;
