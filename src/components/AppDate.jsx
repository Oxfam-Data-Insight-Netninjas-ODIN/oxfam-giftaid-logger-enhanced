import React from "react";
import Footer from "./Footer";
import Marquee from "./Marquee";

function AppDate() {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Europe/London",
  });

  console.log("Date:", currentDate, "Time:", currentTime);

  return (
    <div className="app">
      {/* Other components */}
      <Footer currentDate={currentDate} currentTime={currentTime} />
      <Marquee currentDate={currentDate} currentTime={currentTime} />
    </div>
  );
}

export default AppDate;