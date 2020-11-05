import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  main: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 0,
  },
  titleMe: {
    fontSize: 24,
    fontWeight: 700,
    fontStyle: "normal",
    marginTop: 38,
  },
}));

export default useStyles;
