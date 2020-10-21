import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderWidth: 0,
    maxWidth: 1200,
    margin: "0 auto",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "24px",
    fontWeight: 700,
  },
  textLink: {
    // color: "white",
    // textDecoration: "none",
    fontSize: 44,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
  },
  textDesclaimer: {
    fontSize: 15,
    fontWeight: 400,
  },
  textButton: {
    fontSize: 17,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#fff",
    textTransform: "none",
  },
  phoneButton: {
    backgroundColor: "#FA5821",
    borderRadius: 26,
    width: 528,
    height: 52,
    marginTop: 24,
  },
  textUnderButton: {
    fontSize: 14,
    fontWeight: 400,
    fontStyle: "normal",
    marginTop: 12,
    color: "#7C7E8F",
  },
  socialButtons: {
    width: 162,
    height: 52,
    borderRadius: 50,
    marginRight: 20,
    marginTop: 12,
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
