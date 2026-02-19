// src/app/page.tsx
// The root page at URL "/"
// Redirects to dashboard (authenticated users) or login (unauthenticated)
// Using a simple redirect component keeps root page logic clean.

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/redux';
import { selectIsAuthenticated } from '@/store/slices/authSlice';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function RootPage() {
  const router = useRouter();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/dashboard');
    } else {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  // Show spinner while redirecting
  return <LoadingSpinner fullHeight message="Loading..." />;
}
