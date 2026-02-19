// src/store/slices/authSlice.ts
// A "slice" in Redux Toolkit = reducer + actions + selectors all in one file.
// This slice manages authentication state across the entire app.

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Always define your state shape with TypeScript interfaces
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  // Reducers are functions that update state
  // RTK uses Immer under the hood - you can "mutate" state directly (it's actually immutable)
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions - these are called in components with dispatch(setCredentials(...))
export const { setCredentials, logout } = authSlice.actions;

// Selectors - reusable functions to read from state
// Usage in components: const user = useAppSelector(selectCurrentUser)
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
