import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Screensaver = () => {
  const [screensaverActive, setScreensaverActive] = useState(false);

  useEffect(() => {
    const screensaverText = document.getElementById('screensaver-text');
    const content = document.getElementById('content');

    const startScreensaver = () => {
      document.body.classList.add('screensaver-active');
      screensaverText.style.display = 'block';
      gsap.from(screensaverText, { duration: 2, opacity: 0, scale: 0.5, ease: 'back' });

      const resetScreensaver = () => {
        document.body.classList.remove('screensaver-active');
        screensaverText.style.display = 'none';
        setScreensaverActive(false);
        content.style.display = 'block';
        startCountdown();
      };

      document.addEventListener('mousemove', resetScreensaver);
      document.addEventListener('click', resetScreensaver);
      document.addEventListener('keydown', resetScreensaver);
    };

    const startCountdown = () => {
      setTimeout(() => {
        if (!screensaverActive) {
          setScreensaverActive(true);
          content.style.display = 'none';
          startScreensaver();
        }
      }, 5000); // 5 seconds
    };

    startCountdown();

    return () => {
      document.removeEventListener('mousemove', startCountdown);
      document.removeEventListener('click', startCountdown);
      document.removeEventListener('keydown', startCountdown);
    };
  }, [screensaverActive]);

  return (
    <>
      <div id="screensaver-text">Test Screensaver</div>
      <div id="content">
        {/* Lorem ipsum filler content */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </>
  );
};

export default Screensaver;