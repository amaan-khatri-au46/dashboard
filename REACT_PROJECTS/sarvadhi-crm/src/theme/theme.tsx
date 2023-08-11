import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

// Define your custom theme
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Replace this with your desired primary color
    },
    secondary: {
      main: '#6c757d', // Replace this with your desired secondary color
    },
    // Add more palette colors if needed
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Replace with your preferred font-family
  },
  // Add other theme configurations such as breakpoints, spacing, etc.
  spacing: 8, // Replace with your desired spacing value (e.g., 8, 10, etc.)
});

// Make the theme responsive
const responsiveTheme: Theme = responsiveFontSizes(theme);

export default responsiveTheme;
