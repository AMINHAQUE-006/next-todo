// src/app/(public)/forgot-password/page.tsx
// Refactored forgot password page using the component library + styles object.

'use client';

import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import type { SxProps, Theme } from '@mui/material/styles';
import { AppButton, AppTextField } from '@/components/ui';
import { AuthFormWrapper } from '@/components/forms/AuthFormWrapper';

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = {
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.5,
    mb: 3,
    fontSize: '0.875rem',
    color: 'text.secondary',
    textDecoration: 'none',
  } as React.CSSProperties,

  backLinkBox: {
    mb: 3,
  } satisfies SxProps<Theme>,

  submitButton: {
    mt: 1,
  } satisfies SxProps<Theme>,

  successAlert: {
    mt: 1,
  } satisfies SxProps<Theme>,
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    try {
      setIsLoading(true);
      // MOCK — replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormWrapper
      title="Reset password"
      subtitle="Enter your email and we'll send you a reset link"
      errorMessage={!success ? error : undefined}
      topContent={
        <Box sx={styles.backLinkBox}>
          <Link href="/login" style={styles.backLink}>
            <ArrowBackIcon fontSize="small" />
            Back to login
          </Link>
        </Box>
      }
    >
      {success ? (
        <Alert severity="success" sx={styles.successAlert}>
          Check your email! A reset link has been sent to <strong>{email}</strong>
        </Alert>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <AppTextField
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            autoFocus
          />
          <AppButton
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            isLoading={isLoading}
            loadingLabel="Sending..."
            sx={styles.submitButton}
          >
            Send reset link
          </AppButton>
        </Box>
      )}
    </AuthFormWrapper>
  );
}
