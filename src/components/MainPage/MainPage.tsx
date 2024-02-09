import React, { useMemo } from 'react';
import { RootState } from '../../redux/store';
import { useFetchData } from '../../hooks/useFetchData';
import { Block } from '../Block';
import { useSelector } from 'react-redux';
import { BlockInfo } from '../../utils/types';

export const MainPage: React.FC = () => {
  useFetchData();
  const { posts, comments, albums, photos, todos } = useSelector(
    (state: RootState) => state.jsonPlaceholderSlice,
  );

  const blocksInfo = useMemo<BlockInfo[]>(
    () => [
      {
        backgroundColor: '#26475c',
        textColor: '#73d6f8',
        percentage: posts.length,
        headerText: 'Cost (save 128 USD)%:',
        title: 'Posts',
      },
      {
        backgroundColor: '#631011',
        textColor: '#ed6660',
        percentage: comments.length,
        headerText: 'Security:',
        title: 'Comments',
      },
      {
        backgroundColor: '#4f4f4f',
        textColor: '#b4b4b4',
        percentage: albums.length,
        headerText: 'Reliability (Preview):',
        title: 'Albums',
      },
      {
        backgroundColor: '#325f41',
        textColor: '#80eda4',
        percentage: photos.length,
        headerText: 'Operational excellence:',
        title: 'Photos',
      },
      {
        backgroundColor: '#574035',
        textColor: '#db9e84',
        percentage: todos.length,
        headerText: 'Performance:',
        title: 'Todos',
      },
    ],
    [posts.length, comments.length, albums.length, photos.length, todos.length],
  );
  return (
    <div style={{ padding: '20px', fontSize: '30px', fontWeight: '400' }}>
      <span>Public Cloud</span>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {blocksInfo.map(({ backgroundColor, textColor, percentage, headerText, title }, index) => (
          <Block
            key={index}
            backgroundColor={backgroundColor}
            textColor={textColor}
            percentage={percentage}
            headerText={headerText}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};
