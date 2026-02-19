// src/layouts/ProtectedLayout.tsx
// Refactored: all sx props moved to layoutStyles.ts style objects.
// The JSX is now clean and readable — no raw style values inline.

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  selectColorMode,
  toggleColorMode,
  selectSidebarOpen,
  toggleSidebar,
} from '@/store/slices/uiSlice';
import { selectIsAuthenticated } from '@/store/slices/authSlice';
import { useAuth } from '@/hooks/useAuth';
import { protectedLayoutStyles as styles } from '@/styles/layoutStyles';

// ─── Navigation config ────────────────────────────────────────────────────────
// Adding a new page? Just add an entry here — no JSX changes needed.
const NAV_LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Profile', href: '/profile', icon: <PersonIcon /> },
];

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const colorMode = useAppSelector(selectColorMode);
  const sidebarOpen = useAppSelector(selectSidebarOpen);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { logout } = useAuth();

  
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <Box sx={styles.root}>
      <AppBar position="fixed" elevation={0} sx={styles.appBar(sidebarOpen)}>
        <Toolbar sx={styles.toolbar}>
          <IconButton
            edge="start"
            onClick={() => dispatch(toggleSidebar())}
            sx={styles.menuButton}
            aria-label="Toggle sidebar"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={styles.appBarTitle}>
            MyApp
          </Typography>

          <IconButton onClick={() => dispatch(toggleColorMode())} aria-label="Toggle color mode">
            {colorMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>

          <IconButton onClick={logout} aria-label="Logout" color="error">
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" open={sidebarOpen} sx={styles.drawer}>
        <Box sx={styles.drawerLogo}>
          <Typography variant="h6" fontWeight={800} color="primary">
            MyApp
          </Typography>
        </Box>

        <List sx={styles.drawerNav}>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.href} disablePadding sx={styles.navListItem}>
              <ListItemButton component={Link} href={link.href} sx={styles.navListItemButton}>
                <ListItemIcon sx={styles.navListItemIcon}>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={styles.main}>
        {children}
      </Box>
    </Box>
  );
}
