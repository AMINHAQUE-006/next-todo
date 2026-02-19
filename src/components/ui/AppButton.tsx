// src/components/ui/AppButton.tsx
//
// ─────────────────────────────────────────────────────────────────────────────
//  WHY A CUSTOM BUTTON?
// ─────────────────────────────────────────────────────────────────────────────
//  In a production app you never use <Button> from MUI directly in pages.
//  Instead you wrap it once here and use <AppButton> everywhere. Why?
//
//  1. LOADING STATE — built-in spinner, no copy-pasting in every form
//  2. CONSISTENCY — all buttons share the same base styles, size, radius
//  3. SINGLE CHANGE POINT — need to add an analytics event on every button?
//     Add it here once, not in 20 pages
//  4. PROPS CONTRACT — TypeScript enforces how callers must use the button
//
//  Usage examples:
//    <AppButton>Save</AppButton>
//    <AppButton variant="outlined" isLoading={isLoading}>Submit</AppButton>
//    <AppButton variant="text" startIcon={<EditIcon />}>Edit</AppButton>
//    <AppButton fullWidth size="large" isLoading={submitting}>Sign in</AppButton>
//    <AppButton color="error">Delete</AppButton>
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import type { SxProps, Theme } from '@mui/material/styles';

// Style objects for this component
const styles = {
  // Base style applied to every AppButton
  root: {
    textTransform: 'none', // Disable ALL-CAPS (MUI default is uppercase)
    fontWeight: 600,
    borderRadius: '8px',
    minWidth: 100,
  } satisfies SxProps<Theme>,

  // Spinner is centered inside the button
  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  } satisfies SxProps<Theme>,
};

// ─── Props ────────────────────────────────────────────────────────────────────

interface AppButtonProps extends ButtonProps {
  // When true: disables the button and shows a spinner
  isLoading?: boolean;
  // Optional label shown next to the spinner (default: children)
  loadingLabel?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

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
      // Merge our base styles with any sx passed from the parent.
      // Spread order matters: parent sx overrides base styles if there's a conflict.
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
