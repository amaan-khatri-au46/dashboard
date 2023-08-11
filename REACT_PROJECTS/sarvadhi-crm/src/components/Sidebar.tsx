import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import {
  CalendarMonthOutlined,
  BusinessCenterOutlined,
  ListAltRounded,
} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../theme/theme';
import { ThemeProvider } from '@emotion/react';

const drawerWidth = 220;
const drawerWidthCollapsed = 75;

const customBreakpoints = {
  xs: 0,
  sm: 320,
  md: 375,
  lg: 425,
};

const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? drawerWidth : drawerWidthCollapsed,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexShrink: 0,
  zIndex: theme.zIndex.drawer + 2,
  overflowY: open ? 'auto' : 'hidden',
  '& .MuiDrawer-paper': {
    width: open ? drawerWidth : drawerWidthCollapsed,
    boxSizing: 'border-box',
    zIndex: theme.zIndex.drawer + 2,
    overflowY: open ? 'auto' : 'hidden',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    '& .MuiDrawer-paper': {
      width: '100%',
    },
  },
  [`@media (min-width: ${customBreakpoints.sm}px) and (max-width: ${
    customBreakpoints.lg - 1
  }px)`]: {
    width: open ? '80%' : '100%',
    '& .MuiDrawer-paper': {
      width: open ? '80%' : '100%',
    },
  },
}));

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
});

const LogoImage = styled('img')({
  width: '40px',
  height: '40px',
  marginRight: '8px',
});

const LogoTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const LogoText = styled('p')({
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0',
  color: '#333',
});

const SidebarList = styled(List)({
  padding: '0px 5px',
  '& li': {
    cursor: 'pointer',
  },
  '& li:hover': {
    backgroundColor: '#f5f5f5',
    borderLeft: '3px solid #424242',
    borderRadius: '5px',
  },
});

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(
    window.innerWidth >= customBreakpoints.lg,
  );

  useEffect(() => {
    if (window.innerWidth >= customBreakpoints.lg) {
      setIsExpanded(true);
    }
  }, []);

  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    {
      icon: <DashboardRoundedIcon />,
      text: 'Dashboard',
      click: 'dashboard',
    },
    {
      icon: <AccessTimeRoundedIcon />,
      text: 'Time Tracking',
      click: 'time-tracking',
    },
    {
      icon: <ListAltRounded />,
      text: 'Task List',
      click: 'task-list',
    },
    {
      icon: <BusinessCenterOutlined />,
      text: 'Projects',
      click: 'projects',
    },
    {
      icon: <CalendarMonthOutlined />,
      text: 'Schedule',
      click: 'schedule',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <StyledDrawer
        variant="permanent"
        anchor="left"
        open={isExpanded}
        sx={{
          flexShrink: 0,
          transition: 'width 0.2s',
        }}
      >
        <LogoContainer style={isExpanded ? {} : { justifyContent: 'center' }}>
          <LogoImage src="logo.png" alt="Logo" />
          {isExpanded && (
            <LogoTextContainer>
              <LogoText>Sarvadhi Solutions</LogoText>
              <LogoText>Private Limited</LogoText>
            </LogoTextContainer>
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              right: 10,
              zIndex: 10,
            }}
          >
            <IconButton
              onClick={handleToggleSidebar}
              sx={{
                background: '#2a67b2',
                height: 25,
                width: 25,
                top: '10px',
                position: 'fixed',
                color: 'white',
                marginRight: isExpanded ? '10px' : '0',
              }}
            >
              {isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
        </LogoContainer>
        <SidebarList
          style={
            isExpanded ? {} : { alignItems: 'center', justifyContent: 'center' }
          }
        >
          {menuItems.map((item, index) => (
            <ListItem key={index} onClick={() => navigate(item.click)}>
              <ListItemIcon sx={{ minWidth: '40px', alignItems: 'center' }}>
                {item.icon}
              </ListItemIcon>
              {isExpanded && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </SidebarList>
      </StyledDrawer>
    </ThemeProvider>
  );
};
