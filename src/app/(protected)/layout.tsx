// src/app/(protected)/layout.tsx
// This layout applies to ALL pages inside (protected):
//   /dashboard, /profile
//
// ProtectedLayout handles the auth guard and sidebar/navbar UI.

import { ProtectedLayout } from '@/layouts/ProtectedLayout';

export default function ProtectedRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
