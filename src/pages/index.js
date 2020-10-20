import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import useStyles from "../style/sidebarStyle";

function App() {
  const classes = useStyles();
  return (
    <div>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
