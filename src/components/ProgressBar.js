import React from 'react';

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = Math.floor(Math.random() * 20);

const ProgressBar = () => (
  const progressbarStyle = { width: 120, height: 120, marginRight: '20px' };
  <div style={progressbarStyle}>
    <CircularProgressbar
      value={percentage}
      text=""
      styles={buildStyles({
        strokeLinecap: 'butt',
      })}
    />
  </div>
);

export { ProgressBar, percentage };
