'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string }; // digest is a Next.js-specific hash for the error
  reset: () => void; // Call this to attempt to re-render the failed component
}

export default function GlobalError({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

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
      }}
    >
      <Typography variant="h2" sx={{ mb: 2, fontSize: '4rem' }}>
        💥
      </Typography>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Something went wrong
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 480 }}>
        An unexpected error occurred. Our team has been notified.
        {process.env.NODE_ENV === 'development' && (
          <Box
            component="code"
            sx={{
              display: 'block',
              mt: 2,
              p: 2,
              bgcolor: 'grey.100',
              borderRadius: 1,
              fontSize: '0.75rem',
              textAlign: 'left',
            }}
          >
            {error.message}
          </Box>
        )}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={reset}>
          Try again
        </Button>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Go home</Button>
        </Link>
      </Stack>
    </Box>
  );
}
