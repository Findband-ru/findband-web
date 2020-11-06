import React from "react";
import App from "next/app";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { firebaseProject } from "../../firebaseConfig";
import Head from "next/head";
import { withStyles } from "@material-ui/core";
import { appStyle } from "../style/appStyle";

function MyApp({ Component, pageProps, classes }) {
  const [userId, setUserId] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [pageType, setPageType] = useState(0);
  const [isOnBoard, setIsOnboard] = useState(false);

  const fontFamily = {
    fontFamily: "AvertaCyrillicBlack",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400,
    src: `
      url('/fonts/AvertaCyrillicOtf') format('otf')
      `,
    unicodeRange:
      "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
  };

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
    <div className={classes.container}>
      <style jsx global>{`
        body {
          font-family: AvertaCyrillicBlack, sans-serif;
          overflow: hidden;
        }
      `}</style>
      <Head>
        <title>Findband</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      </Head>
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
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default withStyles(appStyle)(MyApp);
