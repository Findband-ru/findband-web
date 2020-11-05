import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  grow: {
    flexGrow: 1,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    width: 800,
    boxShadow: "none",
    borderBottom: "2px solid #F3F3F5",
    margin: "0 auto",
  },
  title: {
    display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
    fontSize: 24,
    fontWeight: 700,
    marginLeft: 340,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#7C7E8F",
    marginBottom: 24,
  },
  skipText: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#7C7E8F",
    marginLeft: 120,
  },
  loadTitle: {
    fontSize: 24,
    fontWeight: 700,
    fontStyle: "normal",
    marginTop: 38,
  },
  block: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  loadButtons: {
    color: "white",
    borderRadius: 26,
    textTransform: "none",
    marginBottom: 5,
    width: 527,
    height: 52,
  },
  buttonsText: {
    fontSize: 17,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#fff",
  },
}));

export default useStyles;
