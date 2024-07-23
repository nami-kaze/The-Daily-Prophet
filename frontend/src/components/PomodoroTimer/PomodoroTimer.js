// src/components/PomodoroTimer/PomodoroTimer.js
import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css'; // Import the main CSS file
import './PomodoroTimerDarkMode.css'; // Import the dark mode CSS file

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else if (minutes > 0) {
            setMinutes(prevMinutes => prevMinutes - 1);
            return 59;
          } else {
            clearInterval(timer);
            setIsPlaying(false);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, minutes]);

  const handlePlay = () => setIsPlaying(true);
  const handleStop = () => {
    setIsPlaying(false);
    setMinutes(25);
    setSeconds(0);
  };
  const handleDarkModeToggle = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className={`off ${isDarkMode ? '' : 'hide'}`} id="off" onClick={handleDarkModeToggle}>
        {/* Dark Mode Icon */}
      </button>

      <button className={`on ${isDarkMode ? 'hide' : ''}`} id="on" onClick={handleDarkModeToggle}>
        {/* Light Mode Icon */}
      </button>

      <main>
        <section>
          <div className="time">
            <span className="minutes" id="minutes">{minutes}</span>
            <span>:</span>
            <span className="seconds" id="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>
          </div>

          <div className="controls">
            <button className="play" id="play" onClick={handlePlay}>
              {/* Play Icon */}
            </button>

            <button className="stop" id="stop" onClick={handleStop}>
              {/* Stop Icon */}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PomodoroTimer;
