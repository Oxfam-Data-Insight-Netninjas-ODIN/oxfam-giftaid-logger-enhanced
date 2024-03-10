import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero>
        <img
          src="https://png.pngitem.com/pimgs/s/5-52405_clip-art-for-free-download-background-png-transparent.png"
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "250px",
            margin: "20px",
          }}
        />
        <h1>Title here</h1>
      </Hero>
      <h1>Welcome !</h1>
      <p>text here</p>
    </div>
  );
}

export default Home;
