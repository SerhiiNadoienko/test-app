import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GET_ALBUMS, GET_COMMENTS, GET_PHOTOS, GET_POSTS, GET_TODOS } from '../../constants/api';
import { IAlbum, IComment, IPhoto, IPost, ITodo } from '../../utils/types';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get(GET_POSTS);
  return data;
});

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const { data } = await axios.get(GET_COMMENTS);
  return data;
});

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
  const { data } = await axios.get(GET_ALBUMS);
  return data;
});

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  const { data } = await axios.get(GET_PHOTOS);
  return data;
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const { data } = await axios.get(GET_TODOS);
  return data;
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
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = 'Something went wrong.';
      })
      //
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.loading = false;
        state.error = 'Something went wrong.';
      })
      //
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlbums.fulfilled, (state, action: PayloadAction<IAlbum[]>) => {
        state.albums = action.payload;
        state.loading = false;
      })
      .addCase(fetchAlbums.rejected, (state) => {
        state.loading = false;
        state.error = 'Something went wrong.';
      })
      //
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action: PayloadAction<IPhoto[]>) => {
        state.photos = action.payload;
        state.loading = false;
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.loading = false;
        state.error = 'Something went wrong.';
      })
      //
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = 'Something went wrong.';
      });
  },
});

export default jsonPlaceholderSlice.reducer;
