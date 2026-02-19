'use client';

import { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '@/lib/emotion-cache';
import { createAppTheme } from '@/lib/theme';
import { useAppSelector } from '@/hooks/redux';
import { selectColorMode } from '@/store/slices/uiSlice';

// Create emotion cache once (outside component to avoid recreation)
const clientSideEmotionCache = createEmotionCache();

interface MuiThemeProviderProps {
  children: React.ReactNode;
}

export function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  // Read current color mode from Redux store
  const colorMode = useAppSelector(selectColorMode);

  const theme = useMemo(() => createAppTheme(colorMode), [colorMode]);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline normalizes browser default styles and applies MUI's background color */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
