import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchComments } from '../redux/slices/slice';
import { calculatePercentage } from '../utils/calculatePercentage';

export const Test: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const { comments } = useSelector((state: RootState) => state.jsonPlaceholderSlice);
  const percentage = calculatePercentage(comments.length);

  console.log(calculatePercentage(comments.length));
  return (
    <div
      style={{
        width: '300px',
        minHeight: '100px',
        backgroundColor: '#26475c',
        borderRadius: '5px',
        padding: '10px',
      }}>
      <div>
        <span style={{ color: '#73d6f8', fontWeight: 600, marginRight: '15px' }}>
          Cost (save 128 USD)%:
        </span>
        <span style={{ color: 'white', fontWeight: 400, fontSize: '20px' }}>Posts</span>
      </div>

      <span style={{ color: 'white', opacity: 0.8, fontWeight: 400, fontSize: '25px' }}>100%</span>
      <div
        style={{
          marginTop: '20px',
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
            transition: 'width 0.3s ease-in-out',
            width: `${percentage}%`,
          }}></div>
      </div>
    </div>
  );
};
