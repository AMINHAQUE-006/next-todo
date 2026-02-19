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
    '&:last-child': { pb: 4 },
  } satisfies SxProps<Theme>,
};

interface AppCardProps {
  children: React.ReactNode;
  noPadding?: boolean; 
  sx?: SxProps<Theme>; 
}

export function AppCard({ children, noPadding = false, sx }: AppCardProps) {
  return (
    <Card elevation={0} sx={{ ...styles.card, ...(sx as object) }}>
      {noPadding ? children : <CardContent sx={styles.content}>{children}</CardContent>}
    </Card>
  );
}
