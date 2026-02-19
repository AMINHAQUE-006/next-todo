import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { MuiThemeProvider } from '@/providers/MuiThemeProvider';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: {
    template: '%s | MyApp', 
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
      <body className={inter.className} suppressHydrationWarning>
        {/* Redux must wrap MuiThemeProvider because MuiThemeProvider reads from Redux */}
        <ReduxProvider>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
