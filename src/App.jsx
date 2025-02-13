import React from "react";
import Navbar from "./components/Navbar";
import LandigPage from "./components/LandigPage";
import Marquee from "./components/Marquee";

const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandigPage />
      <Marquee />
    </div>
  );

};

export default App;
