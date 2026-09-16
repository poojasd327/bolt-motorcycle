'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Black Accent
      light: '#262626',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#18181B', // Dark Charcoal
      light: '#3F3F46',
      dark: '#09090B',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    divider: '#E2E8F0',
  },
  typography: {
    fontFamily: '"Nunito Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.025em',
      lineHeight: 1.05,
      color: '#0F172A',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.015em',
      color: '#0F172A',
    },
    h3: {
      fontWeight: 800,
      color: '#0F172A',
    },
    h4: {
      fontWeight: 800,
      color: '#0F172A',
    },
    h5: {
      fontWeight: 700,
      color: '#0F172A',
    },
    h6: {
      fontWeight: 700,
      color: '#0F172A',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FFFFFF !important',
          color: '#0F172A !important',
          fontFamily: '"Nunito Sans", sans-serif !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 26px',
          fontSize: '0.95rem',
          fontWeight: 700,
          boxShadow: 'none',
          fontFamily: '"Nunito Sans", sans-serif',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: '#000000',
          color: '#FFFFFF',
          fontWeight: 800,
          '&:hover': {
            background: '#262626',
          },
        },
        outlined: {
          borderColor: '#000000',
          color: '#000000',
          '&:hover': {
            borderColor: '#262626',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          backgroundImage: 'none',
          borderRadius: 18,
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#000000',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          backgroundImage: 'none',
          color: '#0F172A',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
