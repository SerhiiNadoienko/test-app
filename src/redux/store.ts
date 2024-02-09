import { configureStore } from '@reduxjs/toolkit';
import jsonPlaceholderSlice from './slices/slice';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: { jsonPlaceholderSlice },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
