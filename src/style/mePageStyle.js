import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 0,
  },
  grow: {
    flexGrow: 1,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 800,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "24px",
    fontWeight: 700,
  },
  skipText: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#7C7E8F",
  },
  titleMe: {
    fontSize: 24,
    fontWeight: 700,
    fontStyle: "normal",
    marginTop: 38,
  },
  button: {
    width: 166,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#F3F3F5",
    marginTop: 5,
    justifyContent: "space-between",
  },
  buttonGroup: {
    // display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 500,
    width: 800,
    marginTop: 11,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#161931",
    textTransform: "none",
  },

  /* Секция с политиками конфенденциальности */
  policySection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  policyText: {
    marginLeft: 7,
    fontWeight: 400,
    color: "#7C7E8F",
    fontSize: "13px",
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
  projectNameText: {
    marginLeft: 7,
    color: "#111235",
    fontWeight: 400,
    fontSize: "12px",
    marginTop: 16,
  },
}));

export default useStyles;
