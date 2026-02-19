// src/components/ui/LoadingSpinner.tsx
// Reusable loading component used as Suspense fallback and general loading states.
// Always build reusable UI components instead of repeating the same MUI code.

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

interface LoadingSpinnerProps {
  message?: string;
  fullHeight?: boolean; // Takes full viewport height when true (for page loads)
}

export function LoadingSpinner({ message, fullHeight = false }: LoadingSpinnerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        minHeight: fullHeight ? '100vh' : '200px',
      }}
    >
      <CircularProgress size={40} />
      {message && (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      )}
    </Box>
  );
}
