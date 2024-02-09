import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GET_ALBUMS, GET_COMMENTS, GET_PHOTOS, GET_POSTS, GET_TODOS } from '../../constants/api';
import { IAlbum, IComment, IPhoto, IPost, ITodo } from '../../utils/types';
import axios from 'axios';

export const fetchAllData = createAsyncThunk('data/fetchAllData', async () => {
  const [posts, comments, albums, photos, todos] = await Promise.all([
    axios.get(GET_POSTS),
    axios.get(GET_COMMENTS),
    axios.get(GET_ALBUMS),
    axios.get(GET_PHOTOS),
    axios.get(GET_TODOS),
  ]);
  return {
    posts: posts.data,
    comments: comments.data,
    albums: albums.data,
    photos: photos.data,
    todos: todos.data,
  };
});

const jsonPlaceholderSlice = createSlice({
  name: 'jsonPlaceholder',
  initialState: {
    loading: false,
    error: null as string | null,
    posts: [] as IPost[],
    comments: [] as IComment[],
    albums: [] as IAlbum[],
    photos: [] as IPhoto[],
    todos: [] as ITodo[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllData.fulfilled, (state, action: PayloadAction<any>) => {
        const { posts, comments, albums, photos, todos } = action.payload;
        state.posts = posts;
        state.comments = comments;
        state.albums = albums;
        state.photos = photos;
        state.todos = todos;
        state.loading = false;
      })
      .addCase(fetchAllData.rejected, (state) => {
        state.loading = false;
        state.error = 'Something went wrong.';
      });
  },
});

export default jsonPlaceholderSlice.reducer;
