// src/components/layouts/ReduxProvider.tsx
// Next.js App Router runs components on the SERVER by default.
// Redux store needs to run on the CLIENT (browser).
// We wrap the store in a 'use client' component so it only runs in the browser.
//
// This component wraps the entire app in the Redux Provider,
// making the store accessible from any component via hooks.

'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
