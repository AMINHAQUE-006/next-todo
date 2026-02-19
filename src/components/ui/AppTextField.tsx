// src/components/ui/AppTextField.tsx
//
// Wraps MUI TextField with consistent defaults and error display.
// This means every text input in the app behaves identically without
// repeating fullWidth, variant="outlined" etc. on every usage.
//
// Usage:
//   <AppTextField label="Email" name="email" value={email} onChange={handleChange} />
//   <AppTextField label="Password" type="password" error="Password is required" />

'use client';

import TextField, { type TextFieldProps } from '@mui/material/TextField';
import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  // Every AppTextField gets bottom margin so form fields stack with spacing
  root: {
    mb: 2,
  } satisfies SxProps<Theme>,
};

// Extend MUI's TextFieldProps but replace `error` (boolean in MUI) with a
// string error message — cleaner API for form validation
interface AppTextFieldProps extends Omit<TextFieldProps, 'error'> {
  error?: string; // e.g. "Email is required" — shows in red below the field
}

export function AppTextField({ error, sx, ...rest }: AppTextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      // If an error string is passed, mark field as errored and show message
      error={Boolean(error)}
      helperText={error ?? rest.helperText}
      sx={{ ...styles.root, ...(sx as object) }}
      {...rest}
    />
  );
}
