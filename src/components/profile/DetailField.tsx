import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';


// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = {
  

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

};

export default function DetailField({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
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