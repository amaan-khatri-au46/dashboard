import React from 'react';

import { styled } from '@mui/material/styles';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
// import Footer from '../components/Footer';

const LayoutContainer = styled('div')({
  display: 'flex',
  height: '100vh',
});

const MainContent = styled('div')({
  flex: 1,
  overflow: 'auto',
  padding: '20px',
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header />
        <MainContent>{children}</MainContent>
        {/* <Footer /> */}
      </div>
    </LayoutContainer>
  );
};

const SidebarContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export default Layout;

