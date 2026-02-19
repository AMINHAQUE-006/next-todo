// src/store/index.ts
// This is the central Redux store.
// RTK (Redux Toolkit) is the modern, recommended way to write Redux.
// It removes boilerplate and includes useful utilities like createSlice and RTK Query.

import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    // RTK Query auto-generates a reducer that manages API cache state
    [apiSlice.reducerPath]: apiSlice.reducer,

    // Feature slices
    auth: authReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // RTK Query requires its middleware to be added for caching, invalidation, polling etc.
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// These types are derived from the store itself - TypeScript best practice
// Use these types throughout your app instead of plain `RootState` and `AppDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
