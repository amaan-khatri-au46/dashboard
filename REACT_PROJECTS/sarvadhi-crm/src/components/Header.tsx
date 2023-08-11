import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu'; // Use MenuIcon from '@mui/icons-material'
import { Profilevisit } from './Profilevisit';
import { SidebarResponsive } from './SidebarResponsive';

interface HeaderProps {}

const headerStyles: Record<string, React.CSSProperties> = {
  appBar: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    boxShadow: 'none',
    color: 'black',
    position: 'relative', // Ensure proper positioning
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    cursor: 'pointer',
    marginLeft: 'auto',
  },
  menuButton: {
    marginRight: '16px', // Adjust the spacing
    cursor: 'pointer', // Add cursor pointer for better UX
  },
};

const responsiveStyles: Record<string, React.CSSProperties> = {
  appBarMobile: {
    padding: '8px 16px', // Adjust padding for better touch area
  },
  titleMobile: {
    fontSize: '18px',
  },
};

export const Header: React.FC<HeaderProps> = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [drawerLeft, setDrawerLeft] = useState(false);
  const [drawerRight, setDrawerRight] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerRight(true);
  };

  const handleDrawerClose = () => {
    setDrawerRight(false);
  };

  const handleDrawerLeftOpen = () => {
    setDrawerLeft(true);
  };

  const handleDrawerLeftClose = () => {
    setDrawerLeft(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <AppBar
        position="static"
        style={{
          ...headerStyles.appBar,
          ...(isMobile && responsiveStyles.appBarMobile),
        }}
      >
        <Toolbar>
          {isMobile && (
            <MenuIcon
              style={headerStyles.menuButton}
              onClick={handleDrawerLeftOpen}
            />
          )}
          <Typography
            variant="h6"
            style={{
              ...headerStyles.title,
              ...(isMobile && responsiveStyles.titleMobile),
            }}
          >
            My App
          </Typography>
          <Avatar
            alt="A"
            src="userlogo.png"
            style={headerStyles.avatar}
            onClick={handleDrawerOpen}
          />
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerRight} onClose={handleDrawerClose}>
        <Profilevisit />
      </Drawer>
      <Drawer anchor="left" open={drawerLeft} onClose={handleDrawerLeftClose}>
        <SidebarResponsive onClose={handleDrawerLeftClose}/>
      </Drawer>
    </>
  );
};


