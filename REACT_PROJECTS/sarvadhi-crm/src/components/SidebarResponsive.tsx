import { styled } from '@mui/material/styles';
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

import { useNavigate } from 'react-router-dom';

// Interface for the SidebarResponsive component
interface SidebarResponsiveProps {
  onClose: () => void; // Define the type for onClose prop
}

// SidebarResponsive component
export const SidebarResponsive: React.FC<SidebarResponsiveProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();
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
    <div style={{ width: '200px', height: '800px' }}>
      <SidebarContainer>
        <LogoContainer>
          <LogoImage src="logo.png" alt="Logo" />

          <LogoTextContainer>
            <LogoText>Sarvadhi Solutions</LogoText>
            <LogoText>Private Limited</LogoText>
          </LogoTextContainer>
        </LogoContainer>
        <SidebarList>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => {
                onClose();
                navigate(item.click);
              }}
            >
              <ListItemIcon sx={{ minWidth: '40px', alignItems: 'center' }}>
                {item.icon}
              </ListItemIcon>
              {<ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </SidebarList>
      </SidebarContainer>
    </div>
  );
};

const SidebarContainer = styled('div')(({ theme }) => ({
  display: 'none', // Hide by default
  [theme.breakpoints.down('sm')]: {
    display: 'block', // Show on small screens (sm breakpoint)
  },
}));
