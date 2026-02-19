// src/styles/layoutStyles.ts
//
// Style objects scoped to layout components (AppBar, Drawer, PublicLayout).
// Keeping layout styles separate from commonStyles avoids one giant file
// and makes it obvious WHERE a style is used.

import type { SxProps, Theme } from '@mui/material/styles';

type Sx = SxProps<Theme>;

export const DRAWER_WIDTH = 240; // single source of truth for sidebar width

// ─── Protected Layout (Sidebar + AppBar) ─────────────────────────────────────

export const protectedLayoutStyles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  } satisfies Sx,

  // AppBar shifts right when drawer is open — controlled via JS (not pure CSS)
  // because the shift amount depends on DRAWER_WIDTH constant
  appBar: (sidebarOpen: boolean): Sx => ({
    width: sidebarOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
    ml: sidebarOpen ? `${DRAWER_WIDTH}px` : 0,
    transition: 'width 0.2s ease, margin-left 0.2s ease',
    borderBottom: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    color: 'text.primary',
  }),

  toolbar: {
    // No extra styles needed — Toolbar has sensible defaults
  } satisfies Sx,

  menuButton: {
    mr: 2,
  } satisfies Sx,

  appBarTitle: {
    flexGrow: 1,
    fontWeight: 700,
  } satisfies Sx,

  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: DRAWER_WIDTH,
      boxSizing: 'border-box',
      borderRight: '1px solid',
      borderColor: 'divider',
    },
  } satisfies Sx,

  drawerLogo: {
    p: 3,
    borderBottom: '1px solid',
    borderColor: 'divider',
  } satisfies Sx,

  drawerNav: {
    p: 2,
  } satisfies Sx,

  navListItem: {
    mb: 0.5,
  } satisfies Sx,

  navListItemButton: {
    borderRadius: 2,
  } satisfies Sx,

  navListItemIcon: {
    minWidth: 40,
  } satisfies Sx,

  main: {
    flexGrow: 1,
    p: 3,
    mt: '64px', // compensate for fixed AppBar height
  } satisfies Sx,
} as const;

// ─── Public Layout (Login / Register / Forgot Password) ───────────────────────

export const publicLayoutStyles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'background.default',
  } satisfies Sx,

  header: {
    py: 2,
    px: 4,
    borderBottom: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
  } satisfies Sx,

  contentWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    py: 6,
  } satisfies Sx,
} as const;
