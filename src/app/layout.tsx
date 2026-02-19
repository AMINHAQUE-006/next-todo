import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { MuiThemeProvider } from '@/providers/MuiThemeProvider';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Shows fallback font while loading, then swaps
});

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
