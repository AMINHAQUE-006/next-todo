

import type { SxProps, Theme } from '@mui/material/styles';

type Sx = SxProps<Theme>;

// ─── Layout Helpers

export const commonStyles = {
  // Horizontal center + vertical center
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } satisfies Sx,

  // Row with items vertically centered
  flexRow: {
    display: 'flex',
    alignItems: 'center',
  } satisfies Sx,

  // Column layout
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  } satisfies Sx,

  // Space between two items (e.g. label on left, action on right)
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  } satisfies Sx,

  // Full-viewport centered column — used for auth pages, 404, loading screens
  fullPageCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    p: 3,
  } satisfies Sx,

  // Main content area under a top AppBar (64px = MUI AppBar default height)
  pageContent: {
    flexGrow: 1,
    p: 3,
    mt: '64px',
  } satisfies Sx,

  // Consistent page wrapper with title + content spacing
  pageContainer: {
    width: '100%',
    maxWidth: '100%',
  } satisfies Sx,

  // ─── Card / Surface Styles ───────────────────────────────────────────────

  // Standard outlined card (no MUI elevation shadow, just a border)
  outlinedCard: {
    elevation: 0,
    border: '1px solid',
    borderColor: 'divider',
  } satisfies Sx,

  // Card inner padding — keep consistent across all cards
  cardPadding: {
    p: 4,
  } satisfies Sx,

  // ─── Form Styles ─────────────────────────────────────────────────────────

  // Vertical form stack — every child gets bottom margin
  formStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  } satisfies Sx,

  // Wrapper for the full auth form card
  authCard: {
    width: '100%',
  } satisfies Sx,

  // ─── Text Styles ─────────────────────────────────────────────────────────

  // Muted label above a detail value (e.g. "FULL NAME" in the profile grid)
  detailLabel: {
    variant: 'caption',
    color: 'text.secondary',
    fontWeight: 600,
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    mb: 0.5,
  } satisfies Sx,

  // ─── Sidebar / Drawer Styles ─────────────────────────────────────────────

  sidebarLogo: {
    p: 3,
    borderBottom: '1px solid',
    borderColor: 'divider',
  } satisfies Sx,

  sidebarNav: {
    p: 2,
  } satisfies Sx,

  navItem: {
    mb: 0.5,
  } satisfies Sx,

  navItemButton: {
    borderRadius: 2,
  } satisfies Sx,

  navItemIcon: {
    minWidth: 40,
  } satisfies Sx,

  // ─── Profile / User Styles 

  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    mb: 4,
  } satisfies Sx,

  profileAvatar: {
    width: 80,
    height: 80,
    fontSize: '1.5rem',
    fontWeight: 700,
    bgcolor: 'primary.main',
  } satisfies Sx,

  profileGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 3,
  } satisfies Sx,

  // ─── Misc 

  // Right-aligned link row (e.g. "Forgot password?" row in login form)
  forgotPasswordRow: {
    textAlign: 'right',
    mb: 3,
  } satisfies Sx,

  // Divider spacing
  dividerSpacing: {
    mb: 3,
  } satisfies Sx,
} as const;
