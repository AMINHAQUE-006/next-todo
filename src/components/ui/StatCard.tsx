// src/components/ui/StatCard.tsx
//
// Dashboard stat card showing a metric label, value, and change badge.
// Could be reused in any analytics/reporting section.
//
// Usage:
//   <StatCard label="Total Users" value="12,430" change="+12%" />
//   <StatCard label="Revenue" value="$84,201" change="+8.2%" changeColor="success.main" />

import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import { AppCard } from './AppCard';

const styles = {
  label: {
    color: 'text.secondary',
    mb: 0.5,
  } satisfies SxProps<Theme>,

  value: {
    fontWeight: 700,
    mb: 0.5,
  } satisfies SxProps<Theme>,

  change: (color: string): SxProps<Theme> => ({
    color,
    fontWeight: 600,
  }),
};

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  changeColor?: string; // MUI color token, e.g. 'success.main', 'error.main'
}

export function StatCard({
  label,
  value,
  change,
  changeColor = 'success.main',
}: StatCardProps) {
  return (
    <AppCard>
      <Typography variant="body2" sx={styles.label}>
        {label}
      </Typography>
      <Typography variant="h4" sx={styles.value}>
        {value}
      </Typography>
      {change && (
        <Typography variant="caption" sx={styles.change(changeColor)}>
          {change} this month
        </Typography>
      )}
    </AppCard>
  );
}
