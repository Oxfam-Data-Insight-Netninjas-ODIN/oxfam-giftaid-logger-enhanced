import React, { useState, useEffect } from 'react';

function Marquee() {
  
  const [cityName, setCityName] = useState('Loading...');
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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Fetch location data from OpenStreetMap
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        const city = data.features[0].properties.address.town || data.features[0].properties.address.village;

        setCityName(city);
      }, (error) => {
        console.log("Unable to retrieve your location.");
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <marquee behavior="scroll" direction="left" scrollamount={10}>
        <div className="d-inline-flex align-items-baseline m-4">
          <h2>Welcome, CASHIER | TEMP</h2>
          <h6 className="ms-2">{cityName}</h6>
          <h2 className='marq-space'>Today is {currentDate}</h2>
          <h2 className='marq-space'>The time is {currentTime}</h2>
        </div>
      </marquee>
    </div>  
  );
}


export default Marquee;