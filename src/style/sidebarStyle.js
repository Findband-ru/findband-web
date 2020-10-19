import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 400,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 400,
    marginLeft: "200px",
    marginTop: "80px",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: "200px",
  },
  policyText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
  },
}));

export default useStyles;
