// src/components/ui/PageHeader.tsx
//
// Every protected page has a title + optional subtitle at the top.
// Instead of repeating the same two <Typography> tags in every page,
// we extract it into a component.
//
// Usage:
//   <PageHeader title="Dashboard" subtitle="Here's what's happening." />
//   <PageHeader title="My Profile" />

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  wrapper: {
    mb: 4,
  } satisfies SxProps<Theme>,

  title: {
    fontWeight: 800,
    mb: 0.5,
  } satisfies SxProps<Theme>,

  subtitle: {
    color: 'text.secondary',
  } satisfies SxProps<Theme>,
};

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h4" sx={styles.title}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" sx={styles.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
