import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import GlobalTextInput from '../components/GlobalTextInput';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '10px 0px 0 10px',
              alignItems: 'center', // Vertically center the login form
              height: '600px', // Use 100% height to ensure the form fills the space
            }}
          >
            {/* We Are Going To Put Logo Afterwords */}
            {/* Here We Will Add Logo Latter */}
             {/* <div  style={{
                backgroundImage: `url(/Users/sarvadhi/Documents/REACT_PROJECTS/sarvadhi-crm/public/logo.png)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                height: '100px',
                width: '100px',
                top: '0',
                left: '0',
              }}/> */}
            <Box
              sx={{
                my: 8,
                mx: 4,
                width: '100%', // Use 100% width for responsiveness
                maxWidth: '280px', // Limit maximum width for consistency
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                style={{ fontWeight: 'bold', fontSize: '18px' }}
              >
                Login
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '12px',
                }}
              >
                <label>Email address</label>
                <GlobalTextInput
                  value={email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(event.target.value)
                  }
                  variant="outlined"
                  height="14px"
                  width="280px"
                  autoComplete="current-email"
                  size="small"
                />
                <label style={{ marginTop: '12px', display: 'inline' }}>
                  Password
                  <Typography
                    component="span"
                    variant="body2"
                    color="primary"
                    style={{
                      marginLeft: '130px',
                      cursor: 'pointer',
                      fontSize: '12px',
                    }}
                  >
                    Don't remember?
                  </Typography>
                </label>
                <GlobalTextInput
                  value={password}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(event.target.value)
                  }
                  autoComplete="current-password"
                  variant="outlined"
                  height="14px"
                  width="280px"
                  size="small"
                  responsiveWidth="100%"
                />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      borderRadius: '5px',
                      textTransform: 'none',
                      width: '280px',
                      '@media (max-width: 600px)': {
                        width: '100%',
                      },
                      height: '30px',
                    }}
                  >
                    Login now
                  </Button>
                </Box>
                <Grid container></Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: t =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: { xs: 'none', sm: 'none', md: 'block' }, // Hide on smaller screens
            }}
          />
        </Grid>
      </Box>
    </Container>
  );
}
