import { useEffect } from 'react';

import { useAppDispatch } from '../redux/store';
import { fetchAllData } from '../redux/slices/slice';

export const useFetchData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, []);
};
