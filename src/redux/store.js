import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import builderReducer from './features/builder/builderSlice';

export default configureStore({
  reducer: {
    builder: builderReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
