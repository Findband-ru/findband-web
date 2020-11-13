export const profileStyle = {
  container: {
    display: "flex",
    justifyContent: "center",
    borderWidth: 0,
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    left: "40%",
    top: 80,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 0,
    maxWidth: 530,
    top: 40,
    width: "100%",
    borderRadius: 20,
    margin: "0 auto 50px auto",
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  media: {
    position: "relative",
    height: 365,
    width: "100%",
    borderRadius: 16,
    paddingTop: "50%", // 16:9
  },
  heartIcon: {
    position: "absolute",
    top: 5,
    right: 15,
    color: "white",
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#161931",
  },
};
