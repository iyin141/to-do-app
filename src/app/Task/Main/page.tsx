'use client'
import * as React from 'react';



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav';






export default function ResponsiveDrawer() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className='bg-black h-[100vh] text-white'>
      <Sidebar />
    </div>
  );



  return (
    <Box >
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          width: { xl: `84vw`, lg:'84vw' },
          ml:{xl:`16vw`,lg:`16vw`},
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ boxShadow: 'none' , bgcolor:'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className='  w-[100%] ' >
          <Nav />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: '16vw' }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
    
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50vw' },
          }}
          slotProps={{
            root: {
              keepMounted: true, 
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              borderRight: 'none', 
              width: '16vw'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" className='bg-black'  sx={{ flexGrow: 1, width:{xl:'84vw' , lg:'100vw'}, ml:{xl:'16vw', lg:'16vw'} }}>
        <Main />
      </Box>
    </Box>
  );
} 