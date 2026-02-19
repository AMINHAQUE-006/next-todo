// src/app/not-found.tsx
// Custom 404 page. Next.js automatically uses this when no route matches.
// This is a SERVER component (default) - no 'use client' needed.

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 4,
        gap: 2,
      }}
    >
      <Typography
        variant="h1"
        fontWeight={900}
        sx={{
          fontSize: { xs: '6rem', md: '10rem' },
          lineHeight: 1,
          color: 'primary.main',
          opacity: 0.15,
        }}
      >
        404
      </Typography>
      <Typography variant="h4" fontWeight={800}>
        Page not found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>
      <Button
        component={Link}
        href="/"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
      >
        Back to home
      </Button>
    </Box>
  );
}
