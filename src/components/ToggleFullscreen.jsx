import React, { useState } from 'react';

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch((err) => console.error(err));
    } else {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch((err) => console.error(err));
    }
  };

  return <button className='btn' onClick={toggleFullscreen}>Fullscreen</button>;
};

export default FullscreenToggle;
