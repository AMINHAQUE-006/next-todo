'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { SxProps, Theme } from '@mui/material/styles';
import { AppButton, AppTextField } from '@/components/ui';
import { AuthFormWrapper } from '@/components/forms/AuthFormWrapper';
import { useAppDispatch } from '@/hooks/redux';
import { setCredentials } from '@/store/slices/authSlice';

// --- CSS
const styles = {
  forgotPasswordRow: {
    textAlign: 'right',
    mb: 2,
  } satisfies SxProps<Theme>,

  forgotPasswordLink: {
    fontSize: '0.875rem',
    color: 'text.secondary',
  } as React.CSSProperties,

  submitButton: {
    mb: 2,
  } satisfies SxProps<Theme>,

  footerText: {
    textAlign: 'center',
    color: 'text.secondary',
    mt: 2,
  } satisfies SxProps<Theme>,

  footerLink: {
    fontWeight: 600,
    color: 'inherit',
  } as React.CSSProperties,
};

// ─── Types
interface LoginFormState {
  email: string;
  password: string;
}

// ─── LOGIN PAGE
export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<LoginFormState>({ email: '', password: '' });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // --- Input handle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };
  // --- Login handle
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      setIsLoading(true);
      // MOCK — replace with: const result = await login(formData).unwrap();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setCredentials({ user: { id: '1', name: 'USER-001', email: formData.email }, token: 'USE-SECRTER-KEY-LATER' }));
      router.push('/dashboard');
    } catch {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormWrapper
      title="Welcome back"
      subtitle="Sign in to your account to continue"
      errorMessage={error}
      bottomContent={
        <Typography variant="body2" sx={styles.footerText}>
          Don&apos;t have an account?{' '}
          <Link href="/register" style={styles.footerLink}>
            Sign up
          </Link>
        </Typography>
      }
    >
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <AppTextField
          label="Email address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          autoFocus
        />
        <AppTextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <Box sx={styles.forgotPasswordRow}>
          <Link href="/forgot-password" style={styles.forgotPasswordLink}>
            Forgot password?
          </Link>
        </Box>

        <AppButton
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          isLoading={isLoading}
          loadingLabel="Signing in..."
          sx={styles.submitButton}
        >
          Sign in
        </AppButton>
      </Box>
    </AuthFormWrapper>
  );
}