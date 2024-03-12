import React from "react";
import "./styleComponents.css";

function App() {
    const currentDay = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
    });

    const currentDate = new Date().toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
    });

    const currentTime = new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Europe/London",
    });

    return (
        <div className="app">
            <span> Welcome, (User). Today is {currentDay},{currentDate}: {currentTime}</span>
        </div>
    );
}

export default App;


