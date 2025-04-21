import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  CssBaseline,
  styled,
  useTheme
} from '@mui/material';
import {
  ShoppingCart as PurchasesIcon,
  Payment as PaymentMethodsIcon,
  Store as ShopIcon,
  Logout as LogoutIcon,
  Login as LoginIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useState } from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MainLayout() {
  const { isAuthenticated, logout } = useAuth();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isAuthenticated && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            Mi Aplicación
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {!isAuthenticated && (
            <IconButton color="inherit" component={Link} to="/login">
              <LoginIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      
      {isAuthenticated && (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <MenuIcon />
              ) : (
                <MenuIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/dashboard/purchases">
                <ListItemIcon>
                  <PurchasesIcon />
                </ListItemIcon>
                <ListItemText primary="Mis Compras" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/dashboard/payment-methods">
                <ListItemIcon>
                  <PaymentMethodsIcon />
                </ListItemIcon>
                <ListItemText primary="Medios de Pago" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/dashboard/shop">
                <ListItemIcon>
                  <ShopIcon />
                </ListItemIcon>
                <ListItemText primary="Tienda" />
              </ListItemButton>
            </ListItem>
          </List>
          <Box sx={{ mt: 'auto', p: 2 }}>
            <ListItem disablePadding>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                  <LogoutIcon color="error" />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" primaryTypographyProps={{ color: 'error' }} />
              </ListItemButton>
            </ListItem>
          </Box>
        </Drawer>
      )}
      
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}