

'use client';

import TextField, { type TextFieldProps } from '@mui/material/TextField';
import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  root: {
    mb: 2,
  } satisfies SxProps<Theme>,
};

interface AppTextFieldProps extends Omit<TextFieldProps, 'error'> {
  error?: string; 
}

export function AppTextField({ error, sx, ...rest }: AppTextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      error={Boolean(error)}
      helperText={error ?? rest.helperText}
      sx={{ ...styles.root, ...(sx as object) }}
      {...rest}
    />
  );
}
