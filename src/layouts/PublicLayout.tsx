// src/layouts/PublicLayout.tsx
// Layout shared by all PUBLIC routes: /login, /register, /forgot-password
// Refactored: sx values live in publicLayoutStyles, not inline here.

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { publicLayoutStyles as styles } from '@/styles/layoutStyles';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <Box sx={styles.root}>
      <Box component="header" sx={styles.header}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" fontWeight={800} color="primary">
            MyApp
          </Typography>
        </Link>
      </Box>

      <Container maxWidth="sm" sx={styles.contentWrapper}>
        {children}
      </Container>
    </Box>
  );
}
