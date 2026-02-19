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

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = {
  submitButton: {
    mb: 2,
    mt: 1,
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
interface RegisterFormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// ─── RegisterPage 
export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<RegisterFormState>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // FORM VALIDATION --- checking only for filled filelds, password matching, password length, NOTE: not validation email
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    try {
      setIsLoading(true);
      // TODO: REPLACE BELOW CODE WITH REAL API CALL
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setCredentials({ user: { id: '1', name: formData.name, email: formData.email }, token: 'mock-jwt-token' }));
      router.push('/dashboard');
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormWrapper
      title="Create account"
      subtitle="Start your journey with MyApp today"
      errorMessage={error}
      bottomContent={
        <Typography variant="body2" sx={styles.footerText}>
          Already have an account?{' '}
          <Link href="/login" style={styles.footerLink}>
            Sign in
          </Link>
        </Typography>
      }
    >
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <AppTextField
          label="Full name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoFocus
        />
        <AppTextField
          label="Email address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <AppTextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          helperText="Minimum 8 characters"
        />
        <AppTextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <AppButton
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          isLoading={isLoading}
          loadingLabel="Creating account..."
          sx={styles.submitButton}
        >
          Create account
        </AppButton>
      </Box>
    </AuthFormWrapper>
  );
}
