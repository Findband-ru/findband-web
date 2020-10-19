import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  /* Policy */
  policyText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    // marginTop: "200px",
  },
  root: {
    display: "flex",
  },
  drawer: {
    width: 400,
    flexShrink: 0,
    // justifyContent: "flex-end",
  },
  drawerPaper: {
    width: 400,
    marginLeft: "200px",
    marginTop: "80px",
    // justifyContent: "flex-end",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default useStyles;
