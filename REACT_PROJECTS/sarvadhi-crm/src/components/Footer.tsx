import React from 'react';
import { styled } from '@mui/material/styles';

const FooterContainer = styled('footer')({
  backgroundColor: '#A9A9A9',
  padding: '20px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
});

const FooterText = styled('p')({
  margin: '0',
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        {/* &copy; {new Date().getFullYear()} Sarvadhi Solutions Private Limited */}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
