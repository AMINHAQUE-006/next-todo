// src/store/slices/uiSlice.ts
// Manages global UI state like color mode (light/dark) and sidebar open/closed.
// Storing these in Redux means they persist across page navigations within the session.

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PaletteMode } from '@mui/material';
import type { RootState } from '../index';

interface UiState {
  colorMode: PaletteMode;
  sidebarOpen: boolean;
}

const initialState: UiState = {
  colorMode: 'light',
  sidebarOpen: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.colorMode = state.colorMode === 'light' ? 'dark' : 'light';
    },
    setColorMode: (state, action: PayloadAction<PaletteMode>) => {
      state.colorMode = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { toggleColorMode, setColorMode, toggleSidebar, setSidebarOpen } = uiSlice.actions;

export const selectColorMode = (state: RootState) => state.ui.colorMode;
export const selectSidebarOpen = (state: RootState) => state.ui.sidebarOpen;

export default uiSlice.reducer;
