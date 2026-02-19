// src/app/(protected)/dashboard/page.tsx
// Refactored dashboard — uses PageHeader, StatCard, AppCard components.
// Styles moved to a styles object — zero raw sx values in JSX.

import { Suspense } from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import { ErrorBoundary, StatCard, AppCard, PageHeader } from '@/components/ui';

export const metadata: Metadata = { title: 'Dashboard' };

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = {
  section: {
    mt: 4,
  } satisfies SxProps<Theme>,

  sectionTitle: {
    fontWeight: 700,
    mb: 2,
  } satisfies SxProps<Theme>,

  emptyText: {
    color: 'text.secondary',
  } satisfies SxProps<Theme>,
};

// ─── Skeleton (shown by Suspense while DashboardStats loads) ──────────────────
function StatsSkeleton() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4].map((i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <AppCard>
            <Skeleton variant="text" width="60%" height={20} />
            <Skeleton variant="text" width="40%" height={40} sx={{ mt: 1 }} />
          </AppCard>
        </Grid>
      ))}
    </Grid>
  );
}

// ─── Async stats component (simulates server data fetch) ─────────────────────
async function DashboardStats() {
  const stats = [
    { label: 'Total Users', value: '12,430', change: '+12%' },
    { label: 'Revenue', value: '$84,201', change: '+8.2%' },
    { label: 'Active Projects', value: '34', change: '+3' },
    { label: 'Completion Rate', value: '91%', change: '+4%' },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.label}>
          {/* StatCard is a reusable component — passes label/value/change as props */}
          <StatCard label={stat.label} value={stat.value} change={stat.change} />
        </Grid>
      ))}
    </Grid>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  return (
    <Box>
      {/* PageHeader replaces the repeated Typography title+subtitle pattern */}
      <PageHeader title="Dashboard" subtitle="Welcome back! Here's what's happening." />

      <ErrorBoundary>
        <Suspense fallback={<StatsSkeleton />}>
          <DashboardStats />
        </Suspense>
      </ErrorBoundary>

      <Box sx={styles.section}>
        <Typography variant="h5" sx={styles.sectionTitle}>
          Recent Activity
        </Typography>
        <AppCard>
          <Typography sx={styles.emptyText}>
            Activity feed will appear here once connected to an API.
          </Typography>
        </AppCard>
      </Box>
    </Box>
  );
}
