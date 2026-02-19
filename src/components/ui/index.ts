// src/components/ui/index.ts
//
// Barrel export — re-exports every UI component from a single entry point.
// This means imports in your pages go from:
//
//   import { AppButton } from '@/components/ui/AppButton';
//   import { AppCard } from '@/components/ui/AppCard';
//   import { PageHeader } from '@/components/ui/PageHeader';
//
// ...to a clean single line:
//
//   import { AppButton, AppCard, PageHeader } from '@/components/ui';

export { AppButton } from './AppButton';
export { AppTextField } from './AppTextField';
export { AppCard } from './AppCard';
export { PageHeader } from './PageHeader';
export { StatCard } from './StatCard';
export { LoadingSpinner } from './LoadingSpinner';
export { ErrorBoundary } from './ErrorBoundary';
