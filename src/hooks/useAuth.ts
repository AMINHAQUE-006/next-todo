// src/hooks/useAuth.ts
// Custom hooks encapsulate logic that you'd otherwise repeat in many components.
// This hook wraps auth state + actions in a clean API.
//
// Usage in any component:
//   const { user, isAuthenticated, logout } = useAuth()

'use client';

import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from './redux';
import { logout as logoutAction, selectCurrentUser, selectIsAuthenticated } from '@/store/slices/authSlice';

export function useAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector(selectCurrentUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const logout = () => {
    dispatch(logoutAction());
    router.push('/login');
  };

  return { user, isAuthenticated, logout };
}
