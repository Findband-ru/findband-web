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
    width: 350,
    position: "absolute",
    border: "none",
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
    marginLeft: 7,
    fontWeight: 400,
    color: "#7C7E8F",
    fontSize: "13px",
  },
  projectNameText: {
    marginLeft: 7,
    color: "#111235",
    fontWeight: 400,
    fontSize: "12px",
    marginTop: 16,
  },
  sideBarText: {
    fontStyle: "bold",
    fontWeight: 600,
    fontSize: 17,
  },
  sidebarButton: {
    borderRadius: 50,
  },
  sidebarSocialIcon: {
    color: "#161931",
    padding: 6,
    borderRadius: 50,
    border: "1px solid #B0B2BD",
  },
}));

export default useStyles;
