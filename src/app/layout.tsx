// src/app/layout.tsx
// This is the ROOT layout - it wraps EVERY page in the entire app.
// It's a SERVER component (no 'use client') which is Next.js best practice.
// Server components can't use hooks or browser APIs, but they render faster.
//
// Hierarchy: RootLayout → ReduxProvider → MuiThemeProvider → Page

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/components/layouts/ReduxProvider';
import { MuiThemeProvider } from '@/components/layouts/MuiThemeProvider';

// Next.js font optimization - loads Inter font with zero layout shift
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Shows fallback font while loading, then swaps
});

// Metadata is generated on the server - great for SEO
export const metadata: Metadata = {
  title: {
    template: '%s | MyApp', // Individual pages set their own title, this wraps it
    default: 'MyApp',
  },
  description: 'A production-ready Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        suppressHydrationWarning on body prevents warning when theme class is added
        by browser extensions (like dark mode extensions)
      */}
      <body className={inter.className} suppressHydrationWarning>
        {/* Redux must wrap MuiThemeProvider because MuiThemeProvider reads from Redux */}
        <ReduxProvider>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
