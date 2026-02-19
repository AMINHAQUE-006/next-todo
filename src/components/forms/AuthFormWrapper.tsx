import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import type { SxProps, Theme } from '@mui/material/styles';
import { AppCard } from '@/components/ui/AppCard';

const styles = {
  wrapper: {
    width: '100%',
  } satisfies SxProps<Theme>,

  title: {
    fontWeight: 800,
    mb: 0.5,
  } satisfies SxProps<Theme>,

  subtitle: {
    color: 'text.secondary',
    mb: 4,
  } satisfies SxProps<Theme>,

  alert: {
    mb: 3,
  } satisfies SxProps<Theme>,

  form: {
    display: 'flex',
    flexDirection: 'column',
  } satisfies SxProps<Theme>,
};

interface AuthFormWrapperProps {
  title: string;
  subtitle: string;
  errorMessage?: string;
  children: React.ReactNode;
  // Optional content to show ABOVE the title (e.g. back-link in forgot-password)
  topContent?: React.ReactNode;
  // Optional content to show BELOW the form (e.g. "Don't have an account? Sign up")
  bottomContent?: React.ReactNode;
}

export function AuthFormWrapper({
  title,
  subtitle,
  errorMessage,
  children,
  topContent,
  bottomContent,
}: AuthFormWrapperProps) {
  return (
    <Box sx={styles.wrapper}>
      <AppCard>
        {/* Back link, breadcrumbs, etc */}
        {topContent}

        <Typography variant="h4" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" sx={styles.subtitle}>
          {subtitle}
        </Typography>

        {/* Global form error (e.g. "Invalid email or password") */}
        {errorMessage && (
          <Alert severity="error" sx={styles.alert}>
            {errorMessage}
          </Alert>
        )}

        {/* Form fields + submit button */}
        <Box sx={styles.form}>{children}</Box>

        {/* Footer links */}
        {bottomContent}
      </AppCard>
    </Box>
  );
}
