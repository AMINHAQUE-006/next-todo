'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import EditIcon from '@mui/icons-material/Edit';
import type { SxProps, Theme } from '@mui/material/styles';
import { AppButton, AppCard, PageHeader } from '@/components/ui';
import { useAppSelector } from '@/hooks/redux';
import { selectCurrentUser } from '@/store/slices/authSlice';
import { getInitials } from '@/utils';
import DetailField from './DetailField';

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

  loadingSkeleton: {
    borderRadius: 3,
  } satisfies SxProps<Theme>,
};


// ─── ProfilePage
export default function ProfilePage() {
  const user = useAppSelector(selectCurrentUser);

  if (!user) {
    return <Skeleton variant="rectangular" height={300} sx={styles.loadingSkeleton} />;
  }

  return (
    <Box>
      <PageHeader title="My Profile" />

      <AppCard>
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

          {/* Custom AppButton instead of raw MUI Button */}
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
    </Box>
  );
}
