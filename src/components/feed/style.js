export const container = {
  display: "flex",
  position: "absolute",
  justifyContent: "center",
  borderWidth: 0,
  maxWidth: 1200,
  margin: "0 auto",
  left: "40%",
  top: 80,
};

export const root = {
  maxWidth: 528,
  borderRadius: 20,
};

export const media = {
  maxHeight: 365,
  maxWidth: 520,
  borderRadius: 16,
  marginLeft: 5,
  marginRight: 5,
  paddingTop: "50%", // 16:9
};

export const starIcon = {
  position: "relative",
  marginLeft: 470,
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
