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

  return <LoadingSpinner fullHeight message="Loading..." />;
}
