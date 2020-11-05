import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    position: "absolute",
    zIndex: 5,
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    boxShadow: "none",
    borderBottom: "2px solid #F3F3F5",
    backgroundColor: "#fff",
    margin: "0 auto",
    width: 1200,
    left: 0,
    right: 0,
  },
  title: {
    textAlign: "center",
    width: "100%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: 24,
    fontWeight: 700,
  },
  search: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#F3F3F5",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  navbarBtns: {
    backgroundColor: "#F3F3F5",
    borderRadius: 24,
    marginLeft: 35,
    textTransform: "none",
  },
  skipText: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#7C7E8F",
    textTransform: "none",
  },
}));

export default useStyles;
