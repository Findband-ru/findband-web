import React, { useEffect } from "react";
import FeedCards from "../components/feed/Feed";

function App({ changeNavBar }) {
  useEffect(() => {
    changeNavBar(0);
  }, []);
  return <FeedCards />;
}

export default App;
