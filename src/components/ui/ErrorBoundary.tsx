// src/components/ui/ErrorBoundary.tsx
// Error Boundaries catch JavaScript errors anywhere in the child component tree.
// They must be CLASS components (React limitation - hooks can't catch errors yet).
//
// Usage:
//   <ErrorBoundary>
//     <SomeComponentThatMightCrash />
//   </ErrorBoundary>

'use client';

import { Component, type ReactNode, type ErrorInfo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

interface Props {
  children: ReactNode;
  fallback?: ReactNode; // Optional custom fallback UI
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Called when a descendant component throws an error
  // Return the new state (show fallback UI)
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // Called after the error is captured - good for logging
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // In production, send to error tracking like Sentry
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided, otherwise default UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            p: 3,
          }}
        >
          <Paper
            sx={{
              p: 4,
              maxWidth: 480,
              textAlign: 'center',
              borderRadius: 3,
            }}
          >
            <Typography variant="h2" sx={{ mb: 1, fontSize: '3rem' }}>
              ⚠️
            </Typography>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Something went wrong
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {this.state.error?.message || 'An unexpected error occurred'}
            </Typography>
            <Button variant="contained" onClick={this.handleReset}>
              Try again
            </Button>
          </Paper>
        </Box>
      );
    }

    return this.props.children;
  }
}
