import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
  const percentage = Math.floor(Math.random() * 20);
  const progressbarStyle = { width: 120, height: 120, marginRight: '20px' };

  return (
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
};

export default ProgressBar;
