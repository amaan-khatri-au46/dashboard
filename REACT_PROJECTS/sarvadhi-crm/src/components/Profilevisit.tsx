import React from 'react';

// Styles for different elements
const drawerContentStyles: Record<string, React.CSSProperties> = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    height: '300px',
  },
  image: {
    height: '150px',
    width: '150px',
  },
  text: {
    marginBottom: '0px',
  },
  noMargin: {
    margin: '3px', // Reset margin for spacing
  },
  gmail: {
    margin: '3px',
    color: '#5579C6',
  },
};

// Profilevisit component
export const Profilevisit: React.FC = () => {
  const isMobile = window.innerWidth <= 425; // Define a mobile threshold width
  return (
    <div
      style={{
        width: isMobile ? '200px' : '315px', // Adjust width based on screen width
        height: isMobile ? '200px' : '800px',
      }}
    >
      <div style={drawerContentStyles.container}>
        <img
          src="userlogo.png"
          alt="Profile"
          style={{
            ...drawerContentStyles.image,
            marginTop: isMobile ? '5px' : '20px',
            height: isMobile ? '80px' : drawerContentStyles.image.height,
            width: isMobile ? '80px' : drawerContentStyles.image.width,
          }}
        />
        <p
          style={{
            ...drawerContentStyles.text,
            fontSize: isMobile ? '12px' : 'inherit',
          }}
        >
          HRM-Amaan khatri
        </p>
        <p
          style={{
            ...drawerContentStyles.gmail,
            fontSize: isMobile ? '12px' : 'inherit',
          }}
        >
          amaan.khatri@sarvadhi.com
        </p>
        <p
          style={{
            ...drawerContentStyles.noMargin,
            fontSize: isMobile ? '12px' : 'inherit',
            marginTop: isMobile ? '5px' : drawerContentStyles.noMargin.margin,
          }}
        >
          Associate Developer
        </p>
      </div>
    </div>
  );
};
