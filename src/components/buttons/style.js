import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  /* Auth Button */
  signinButton: {
    backgroundColor: "#FA5821",
    color: "white",
    borderRadius: 26,
    marginLeft: 80,
    marginRight: 35,
    textTransform: "none",
    textDecoration: "none",
  },
  signinBtnText: {
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 700,
    fontStyle: "normal",
  },

  /* Next Button */
  nextButton: {
    backgroundColor: "#FA5821",
    color: "white",
    height: 52,
    width: 167,
    marginTop: 50,
    borderRadius: 26,
    textTransform: "none",
    textDecoration: "none",
  },
  nextBtnText: {
    textDecoration: "none",
    fontSize: 17,
    fontWeight: 600,
    fontStyle: "normal",
  },
}));

export default useStyles;
