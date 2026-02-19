// src/app/(protected)/profile/page.tsx
// Refactored profile page — uses PageHeader, AppCard, AppButton, and a styles object.

'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import EditIcon from '@mui/icons-material/Edit';
import type { SxProps, Theme } from '@mui/material/styles';
import { AppButton, AppCard, PageHeader } from '@/components/ui';
import { useAppSelector } from '@/hooks/redux';
import { selectCurrentUser } from '@/store/slices/authSlice';
import { getInitials } from '@/utils';

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = {
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    mb: 4,
  } satisfies SxProps<Theme>,

  avatar: {
    width: 80,
    height: 80,
    fontSize: '1.5rem',
    fontWeight: 700,
    bgcolor: 'primary.main',
  } satisfies SxProps<Theme>,

  userInfo: {
    flex: 1,
  } satisfies SxProps<Theme>,

  userName: {
    fontWeight: 700,
  } satisfies SxProps<Theme>,

  userEmail: {
    color: 'text.secondary',
  } satisfies SxProps<Theme>,

  editButton: {
    alignSelf: 'flex-start',
  } satisfies SxProps<Theme>,

  divider: {
    mb: 3,
  } satisfies SxProps<Theme>,

  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 3,
  } satisfies SxProps<Theme>,

  detailLabel: {
    fontWeight: 600,
    color: 'text.secondary',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontSize: '0.7rem',
    display: 'block',
    mb: 0.5,
  } satisfies SxProps<Theme>,

  detailValue: {
    // inherits Typography body1 defaults
  } satisfies SxProps<Theme>,

  monoValue: {
    fontFamily: 'monospace',
  } satisfies SxProps<Theme>,

  devAlert: {
    mt: 3,
  } satisfies SxProps<Theme>,

  loadingSkeleton: {
    borderRadius: 3,
  } satisfies SxProps<Theme>,
};

// ─── Sub-component: one row in the profile details grid ──────────────────────
function DetailField({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <Box>
      <Typography variant="caption" sx={styles.detailLabel}>
        {label}
      </Typography>
      <Typography variant="body1" sx={mono ? styles.monoValue : styles.detailValue}>
        {value}
      </Typography>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const user = useAppSelector(selectCurrentUser);

  if (!user) {
    return <Skeleton variant="rectangular" height={300} sx={styles.loadingSkeleton} />;
  }

  return (
    <Box>
      <PageHeader title="My Profile" />

      <AppCard>
        {/* Profile header: avatar + name + email + edit button */}
        <Box sx={styles.profileHeader}>
          <Avatar sx={styles.avatar}>{getInitials(user.name)}</Avatar>

          <Box sx={styles.userInfo}>
            <Typography variant="h5" sx={styles.userName}>
              {user.name}
            </Typography>
            <Typography variant="body2" sx={styles.userEmail}>
              {user.email}
            </Typography>
          </Box>

          {/* AppButton instead of raw MUI Button */}
          <AppButton variant="outlined" startIcon={<EditIcon />} sx={styles.editButton}>
            Edit Profile
          </AppButton>
        </Box>

        <Divider sx={styles.divider} />

        {/* Profile detail grid */}
        <Box sx={styles.detailsGrid}>
          <DetailField label="Full Name" value={user.name} />
          <DetailField label="Email" value={user.email} />
          <DetailField label="User ID" value={user.id} mono />
        </Box>
      </AppCard>

      <Alert severity="info" sx={styles.devAlert}>
        <strong>Dev note:</strong> In production, this page uses{' '}
        <code>useGetProfileQuery()</code> from RTK Query to fetch live API data.
        Currently showing data from Redux store (populated at login).
      </Alert>
    </Box>
  );
}
