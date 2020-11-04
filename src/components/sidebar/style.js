import { makeStyles } from "@material-ui/core/styles";

// const screenHeight = document.documentElement.clientHeight;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    borderWidth: 0,
    maxWidth: 1200,
    margin: "0 auto",
    left: "40%",
  },
  container: {
    overflow: "auto",
    position: "fixed",
    top: "55%",
    left: "20%",
    webkitTransform: "translateY(-50%)",
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)",
  },
  content: {
    position: "relative",
    display: "flex",
    flexGrow: 1,
  },
  policyText: {
    marginLeft: 7,
    fontWeight: 400,
    color: "#7C7E8F",
    fontSize: 13,
  },
  projectNameText: {
    marginLeft: 7,
    color: "#111235",
    fontWeight: 400,
    fontSize: 12,
    marginTop: 16,
  },
  sideBarText: {
    fontStyle: "bold",
    fontWeight: 600,
    fontSize: 17,
  },
  sidebarButton: {
    height: 52,
    width: 304,
    borderRadius: 50,
  },
  sidebarSocialIcon: {
    color: "#161931",
    padding: 6,
    borderRadius: 50,
    border: "1px solid #B0B2BD",
  },
  policyContainer: {
    // marginTop: screenHeight - 570,
    marginTop: 410,
  },
}));

export default useStyles;
