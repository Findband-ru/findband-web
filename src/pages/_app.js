import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AvertaCyrillicOtf from "../../public/fonts/Averta-Cyrillic-Black.otf";
import useStyles from "../style/appStyle";
import { firebaseProject } from "../../firebaseConfig";

const mainFont = {
  fontFamily: "AvertaCyrillicBlack",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${AvertaCyrillicOtf}) format('otf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: { mainFont },
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const [userId, setUserId] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [pageType, setPageType] = useState(0);

  const onChange = (user) => {
    if (user) {
      setUserId(user.uid);
    } else {
      setUserId(null);
    }
  };
  useEffect(() => {
    const unsubscribe = firebaseProject.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        body {
          font-family: AvertaCyrillicBlack, sans-serif;
          overflow: hidden;
        }
      `}</style>
      <div className={classes.container}>
        <Navbar userId={userId} pageType={pageType} isProfile={isProfile} />
        <Sidebar
          userId={userId}
          setIsProfile={setIsProfile}
          setPageType={setPageType}
        />
        <Component {...pageProps} userId={userId} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
