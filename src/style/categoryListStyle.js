import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 500,
    width: 600,
    marginTop: 11,
  },
  button: {
    width: 166,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#F3F3F5",
    marginTop: 5,
    marginLeft: 15,
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#161931",
    textTransform: "none",
  },
  piktograms: {
    color: "#7C7E8F",
  },
}));

export default useStyles;
