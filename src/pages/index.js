import React, { useEffect } from "react";
import FeedCards from "../components/feed/Feed";

function App({ setPageType }) {
  useEffect(() => {
    setPageType(0);
  }, []);
  return <FeedCards />;
}

export default App;
