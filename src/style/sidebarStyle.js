import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    borderWidth: 0,
    maxWidth: 1200,
    margin: "0 auto",
  },
  drawer: {
    width: 400,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 400,
    position: "absolute",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    position: "relative",
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  policyText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
  },
  sideBarText: {
    fontStyle: "bold",
    fontWeight: 600,
    fontSize: 17,
  },
}));

export default useStyles;
