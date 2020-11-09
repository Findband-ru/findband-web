import React from "react";
import App from "next/app";
import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { firebaseProject } from "../../firebaseConfig";
import { withStyles } from "@material-ui/core";
import { appStyle } from "../style/appStyle";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../style/theme";

function MyApp({ Component, pageProps, classes }) {
  const [userId, setUserId] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [pageType, setPageType] = useState(0);
  const [isOnBoard, setIsOnboard] = useState(false);

  const onChange = (user) => {
    if (user) {
      setUserId(user.uid);
    } else {
      setUserId(null);
    }
  };
  useEffect(() => {
    const unsubscribe = firebaseProject.auth().onAuthStateChanged(onChange);
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Head>
        <title>Findband</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.container}>
          <div
            className={{
              position: "relative",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Navbar
              userId={userId}
              pageType={pageType}
              isProfile={isProfile}
              setPageType={setPageType}
              setIsOnboard={setIsOnboard}
            />
            <Sidebar
              userId={userId}
              isOnboard={isOnBoard}
              setIsProfile={setIsProfile}
              setPageType={setPageType}
              setIsOnboard={setIsOnboard}
            />
            <Component
              {...pageProps}
              userId={userId}
              setPageType={setPageType}
              setIsOnboard={setIsOnboard}
            />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default withStyles(appStyle)(MyApp);
