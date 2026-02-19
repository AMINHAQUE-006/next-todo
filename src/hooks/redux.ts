// src/hooks/redux.ts
// Always use these typed hooks instead of plain useDispatch and useSelector.
// They are pre-typed with your store's RootState and AppDispatch,
// so you get full TypeScript autocomplete and type safety.
//
// Usage:
//   const dispatch = useAppDispatch()
//   const user = useAppSelector(selectCurrentUser)

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector(selector);
