// src/components/ui/AppCard.tsx
//
// Standardized card wrapper used throughout the app.
// Every card has the same border, shadow, and padding style.
// If the design changes (e.g. rounder corners, stronger border) — fix once here.
//
// Usage:
//   <AppCard>...</AppCard>
//   <AppCard noPadding>...</AppCard>         — for cards with custom internal layout
//   <AppCard sx={{ mt: 3 }}>...</AppCard>    — extend with extra sx

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  card: {
    elevation: 0,
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 3,
  } satisfies SxProps<Theme>,

  content: {
    p: 4,
    // MUI applies &:last-child { pb: 16px } which overrides our padding.
    // Override it back to keep consistent padding at the bottom too.
    '&:last-child': { pb: 4 },
  } satisfies SxProps<Theme>,
};

interface AppCardProps {
  children: React.ReactNode;
  noPadding?: boolean; // Skip CardContent wrapper (for custom internal layouts)
  sx?: SxProps<Theme>; // Extra styles from parent
}

export function AppCard({ children, noPadding = false, sx }: AppCardProps) {
  return (
    <Card elevation={0} sx={{ ...styles.card, ...(sx as object) }}>
      {noPadding ? children : <CardContent sx={styles.content}>{children}</CardContent>}
    </Card>
  );
}
