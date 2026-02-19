// src/app/loading.tsx
// App Router's built-in loading UI.
// Next.js AUTOMATICALLY shows this while a page is loading (during navigation).
// Works as a Suspense boundary wrapper - no setup needed, just create this file!
//
// You can also create loading.tsx files inside specific route folders
// to scope them: (protected)/dashboard/loading.tsx → only for dashboard

import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function GlobalLoading() {
  return <LoadingSpinner fullHeight message="Loading page..." />;
}
