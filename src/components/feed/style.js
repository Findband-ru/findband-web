export const container = {
  display: "flex",
  justifyContent: "center",
  borderWidth: 0,
  maxWidth: 1200,
  width: "100%",
  margin: "0 auto",
  left: "40%",
  top: 80,
};

export const root = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderWidth: 0,
  maxWidth: 530,
  margin: "0 auto",
  width: "100%",
  borderRadius: 20,
  margin: "0 auto 50px auto",
  padding: 5,
};

export const media = {
  position: "relative",
  height: 365,
  width: "100%",
  borderRadius: 16,
  paddingTop: "50%", // 16:9
};

export const audioStyle = {
  width: 450,
  marginTop: 20,
  marginLeft: "7%",
  currentTime: "none",
};

export const starIcon = {
  position: "absolute",
  top: 5,
  right: 15,
  color: "white",
};

export const feed = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  overflowY: "scroll",
  paddingBottom: 100,
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const profileCard = {
  paddingBottom: 20,
};

export const cardTitleText = {
  fontSize: 24,
  fontWeight: 700,
  fontStyle: "normal",
  color: "#000",
};
