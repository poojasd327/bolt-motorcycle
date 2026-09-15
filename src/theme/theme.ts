'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#800000', // Crimson Burgundy Accent
      light: '#A32A2A',
      dark: '#550000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1E293B', // Slate Dark
      light: '#334155',
      dark: '#0F172A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF', // Pure White Theme
      paper: '#FFFFFF',   // Pure White Cards
    },
    text: {
      primary: '#0F172A', // Crisp Dark Slate Text
      secondary: '#475569', // Subtle Slate Subtext
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Outfit", "Inter", -apple-system, sans-serif',
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
            boxShadow: '0 8px 25px rgba(128, 0, 0, 0.2)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #800000 0%, #A32A2A 100%)',
          color: '#FFFFFF',
          fontWeight: 800,
          '&:hover': {
            background: 'linear-gradient(135deg, #600000 0%, #800000 100%)',
          },
        },
        outlined: {
          borderColor: '#800000',
          color: '#800000',
          '&:hover': {
            borderColor: '#550000',
            backgroundColor: 'rgba(128, 0, 0, 0.05)',
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
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#800000',
            boxShadow: '0 12px 32px rgba(128, 0, 0, 0.12)',
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
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF !important',
          backgroundImage: 'none !important',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#F8F9FA',
            color: '#0F172A',
            borderRadius: 12,
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
            },
            '&:hover fieldset': {
              borderColor: '#800000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#800000',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#475569',
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
          backgroundColor: '#FFFFFF !important',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          color: '#0F172A',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#0F172A',
          '&:hover': {
            backgroundColor: 'rgba(128, 0, 0, 0.06)',
            color: '#800000',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(128, 0, 0, 0.12)',
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
