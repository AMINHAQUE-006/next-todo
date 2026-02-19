import { Suspense } from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import { ErrorBoundary, AppCard, PageHeader } from '@/components/ui';
import DashboardStats from './DashboardStats';
import StatsSkeleton from './StatsSkeleton';

export const metadata: Metadata = { title: 'Dashboard' };

// ─── CSS
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





// ─── DashboardPage
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
