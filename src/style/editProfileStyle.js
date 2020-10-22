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
    justifyContent: "flex-end",
    boxShadow: "none",
    borderBottom: "2px solid #F3F3F5",
    margin: "0 auto",
    width: 800,
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: 24,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#7C7E8F",
  },
  skipText: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#7C7E8F",
    marginRight: 140,
    marginLeft: 110,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 700,
    fontStyle: "normal",
    marginTop: 38,
  },
  input: {
    display: "none",
  },
  textInputBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 500,
  },
  nameText: {
    display: "inline-block",
    alignSelf: "flex-start",
    fontSize: 17,
    fontWeight: 600,
    fontStyle: "normal",
    marginTop: 38,
  },
  fotoText: {
    fontSize: 17,
    fontWeight: 600,
    fontStyle: "normal",
    marginTop: 38,
    marginBottom: 12,
  },
  inputName: {
    width: 500,
    height: 52,
    marginTop: 10,
  },
  symbolLimit: {
    display: "inline-block",
    fontSize: 13,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#B0B2BD",
    marginLeft: 206,
  },
  imageItem: {
    width: 240,
    height: 155,
    borderRadius: 16,
    marginRight: 16,
    marginBottom: 16,
  },
  imageGroup: {
    width: 515,
  },
  nextText: {
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 700,
    fontStyle: "normal",
  },
  nextButton: {
    backgroundColor: "#FA5821",
    color: "white",
    width: 167,
    height: 42,
    borderRadius: 26,
    marginTop: 32,
    textTransform: "none",
    textDecoration: "none",
  },
  textArea: {
    width: 500,
    borderRadius: 5,
    fontSize: 17,
    fontWeight: 400,
    color: "#B0B2BD",
    borderColor: "#B0B2BD",
    marginTop: 10,
  },
}));

export default useStyles;
