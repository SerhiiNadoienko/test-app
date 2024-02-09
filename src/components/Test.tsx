import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchPosts, fetchComments } from '../redux/slices/slice';

export const Test: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const { posts, comments } = useSelector((state: RootState) => state.jsonPlaceholderSlice);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};
