// src/components/layouts/MuiThemeProvider.tsx
// This is the MUI theme provider. It must be a client component because:
//   1. It reads color mode from Redux (client-side state)
//   2. MUI's ThemeProvider uses React context (client-side feature)
//   3. Emotion cache for SSR requires client-side setup
//
// Pattern: Server Layout → ReduxProvider → MuiThemeProvider → Page Content

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

  // useMemo ensures theme is only recreated when colorMode changes (performance optimization)
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
