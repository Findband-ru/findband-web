import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    flexGrow: 1,
  },
  grow: {
    display: "fixed",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
    fontSize: 24,
    fontWeight: 700,
  },
  root: {
    marginTop: 50,
    marginLeft: 700,
    maxHeight: 588,
    maxWidth: 528,
    borderRadius: 20,
  },
  media: {
    maxHeight: 365,
    maxWidth: 520,
    borderRadius: 16,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: "50%", // 16:9
  },
  heartIcon: {
    position: "relative",
    marginLeft: 470,
    color: "white",
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#161931",
  },
  skipText: {
    fontSize: 15,
    fontWeight: 700,
    fontStyle: "normal",
    color: "#FA5821",
  },
}));

export default useStyles;
