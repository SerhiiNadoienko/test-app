import React from 'react';

import { calculatePercentage } from '../utils/calculatePercentage';

interface BlockProps {
  backgroundColor: string;
  textColor: string;
  percentage: number;
  headerText: string;
  title: string;
}

export const Block: React.FC<BlockProps> = ({
  backgroundColor,
  textColor,
  percentage,
  headerText,
  title,
}) => {
  const percentagedWidth = calculatePercentage(percentage);

  return (
    <div
      style={{
        width: '260px',
        minHeight: '100px',
        backgroundColor: backgroundColor,
        borderRadius: '5px',
        padding: '10px',
      }}>
      <div>
        <span style={{ color: textColor, fontWeight: 600, fontSize: '15px', marginRight: '15px' }}>
          {headerText}
        </span>
        <span style={{ color: 'white', fontWeight: 400, fontSize: '20px' }}>{title}</span>
      </div>

      <span style={{ color: 'white', opacity: 0.8, fontWeight: 400, fontSize: '25px' }}>
        {`${percentagedWidth}%`}
      </span>
      <div
        style={{
          marginTop: '10px',
          backgroundColor: 'rgba(204, 204, 204, 0.2)',
          height: '5px',
          borderRadius: '5px',
          marginBottom: '10px',
        }}>
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            height: '100%',
            transition: 'width 1s ease-in-out',
            width: `${percentagedWidth}%`,
          }}></div>
      </div>
    </div>
  );
};
