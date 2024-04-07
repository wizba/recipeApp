import { configureStore,getDefaultMiddleware  } from '@reduxjs/toolkit'
import recipiesReducer from './recipeslice';
export const store = configureStore({
  reducer: {
    recipies: recipiesReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})