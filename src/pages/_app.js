import React from "react";
import App from "next/app";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { firebaseProject } from "../../firebaseConfig";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      </Head>
      <div
        style={{
          position: "relative",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <Navbar userId={userId} pageType={pageType} isProfile={isProfile} />
        <Sidebar
          userId={userId}
          setIsProfile={setIsProfile}
          setPageType={setPageType}
        />
        <Component {...pageProps} userId={userId} />
      </div>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
