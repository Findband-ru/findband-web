import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  signinButton: {
    backgroundColor: "#FA5821",
    color: "white",
    borderRadius: 26,
    marginLeft: 180,
    marginRight: 35,
    textTransform: "none",
    textDecoration: "none",
  },
  signinText: {
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 700,
    fontStyle: "normal",
  },
}));

export default useStyles;
