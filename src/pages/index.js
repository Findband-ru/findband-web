import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";

function App() {
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
