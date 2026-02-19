// src/app/(public)/layout.tsx
// Route groups in Next.js: folders with () in the name don't add to the URL.
// So (public)/login → URL is just /login (not /public/login).
//
// This layout applies to ALL pages inside (public):
//   /login, /register, /forgot-password

import { PublicLayout } from '@/layouts/PublicLayout';

export default function PublicRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicLayout>{children}</PublicLayout>;
}
