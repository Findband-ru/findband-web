import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainPage: {
    display: "absolute",
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
    maxWidth: 800,
    margin: "0 auto",
  },
  // title: {
  //   display: "none",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "block",
  //   },
  //   fontSize: 24,
  //   fontWeight: 700,
  // },
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