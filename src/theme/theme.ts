'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#800000', // Deep Maroon / Burgundy
      light: '#A32A2A',
      dark: '#550000',
      contrastText: '#F8F5EE', // Light Sand
    },
    secondary: {
      main: '#633A2C', // Deep Cocoa Wood
      light: '#8A5340',
      dark: '#3D231A',
      contrastText: '#F8F5EE',
    },
    background: {
      default: '#F2EDE4', // Soft Luxury Sand Linen (Light Theme)
      paper: '#F8F5EE',   // Warm Sand Paper Card
    },
    text: {
      primary: '#291C0E', // Deep Charcoal Espresso Text
      secondary: '#633A2C', // Deep Cocoa Secondary Text
    },
    divider: 'rgba(99, 58, 44, 0.18)',
  },
  typography: {
    fontFamily: '"Outfit", "Inter", -apple-system, sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.025em',
      lineHeight: 1.05,
      color: '#291C0E',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.015em',
      color: '#291C0E',
    },
    h3: {
      fontWeight: 800,
      color: '#291C0E',
    },
    h4: {
      fontWeight: 800,
      color: '#291C0E',
    },
    h5: {
      fontWeight: 700,
      color: '#291C0E',
    },
    h6: {
      fontWeight: 700,
      color: '#291C0E',
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
          backgroundColor: '#F2EDE4 !important',
          color: '#291C0E !important',
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
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 10px 25px rgba(128, 0, 0, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #800000 0%, #633A2C 100%)',
          color: '#F8F5EE',
          fontWeight: 800,
          '&:hover': {
            background: 'linear-gradient(135deg, #633A2C 0%, #291C0E 100%)',
          },
        },
        outlined: {
          borderColor: '#800000',
          color: '#800000',
          '&:hover': {
            borderColor: '#633A2C',
            backgroundColor: 'rgba(128, 0, 0, 0.06)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#F8F5EE',
          backgroundImage: 'none',
          borderRadius: 18,
          border: '1px solid rgba(184, 132, 44, 0.3)',
          boxShadow: '0 10px 30px rgba(41, 28, 14, 0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#800000',
            boxShadow: '0 20px 40px rgba(128, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#F8F5EE',
          backgroundImage: 'none',
          color: '#291C0E',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F2EDE4 !important',
          backgroundImage: 'none !important',
          border: '1px solid rgba(128, 0, 0, 0.3)',
          boxShadow: '0 25px 60px rgba(41, 28, 14, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#F8F5EE',
            color: '#291C0E',
            borderRadius: 12,
            '& fieldset': {
              borderColor: 'rgba(99, 58, 44, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: '#800000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#800000',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#633A2C',
            '&.Mui-focused': {
              color: '#800000',
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F8F5EE !important',
          border: '1px solid rgba(99, 58, 44, 0.25)',
          color: '#291C0E',
          boxShadow: '0 10px 30px rgba(41, 28, 14, 0.12)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#291C0E',
          '&:hover': {
            backgroundColor: 'rgba(128, 0, 0, 0.08)',
            color: '#800000',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(128, 0, 0, 0.15)',
            color: '#800000',
            fontWeight: 700,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 8,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
