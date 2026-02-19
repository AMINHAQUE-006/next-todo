'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import type { SxProps, Theme } from '@mui/material/styles';

//
const styles = {
  root: {
    textTransform: 'none', // Disable ALL-CAPS (MUI default is uppercase)
    fontWeight: 600,
    borderRadius: '8px',
    minWidth: 100,
  } satisfies SxProps<Theme>,

  // Spinner 
  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  } satisfies SxProps<Theme>,
};

// ─── Props 

interface AppButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingLabel?: string;
}

// ─── Component 

export function AppButton({
  children,
  isLoading = false,
  loadingLabel,
  disabled,
  sx,
  ...rest
}: AppButtonProps) {
  return (
    <Button
      sx={{ ...styles.root, ...(sx as object) }}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        // Show spinner + optional label while loading
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CircularProgress size={18} color="inherit" />
          {loadingLabel ?? children}
        </span>
      ) : (
        children
      )}
    </Button>
  );
}
