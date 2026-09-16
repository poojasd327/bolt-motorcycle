'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import { dealershipData } from '../data/dealershipInfo';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Models', href: '#models' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'EMI Calculator', href: '#emi-calculator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled
          ? 'rgba(15, 15, 16, 0.96)'
          : 'rgba(15, 15, 16, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.4)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 }, justifyContent: 'space-between' }}>
          {/* Logo & Dealership Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(211, 47, 47, 0.3)',
              }}
            >
              <FlashOnIcon sx={{ color: '#FFFFFF', fontSize: 26 }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant="h5"
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    textTransform: 'uppercase',
                    fontFamily: '"Nunito Sans", sans-serif',
                  }}
                >
                  BOLT <Box component="span" sx={{ color: '#D32F2F' }}>MOTORCYCLES</Box>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <VerifiedIcon sx={{ color: '#D32F2F', fontSize: 13 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#A1A1AA',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    fontSize: '0.66rem',
                    textTransform: 'uppercase',
                    fontFamily: '"Nunito Sans", sans-serif',
                  }}
                >
                  Authorised Royal Enfield Dealership
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Desktop Nav Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3.5 }}>
            {navItems.map((item) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  color: '#D4D4D8',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  fontFamily: '"Nunito Sans", sans-serif',
                  letterSpacing: '0.01em',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#FFFFFF',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-4px',
                    left: '0',
                    backgroundColor: '#FFFFFF',
                    transition: 'width 0.25s ease-in-out',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Action CTAs */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
              variant="contained"
              component="a"
              href={`https://wa.me/${dealershipData.whatsapp}?text=Hi%20Bolt%20Motorcycles,%20I%20would%20like%20to%20book%20a%20test%20ride.`}
              target="_blank"
              sx={{
                px: 3.5,
                py: 1.1,
                fontSize: '0.88rem',
                fontWeight: 800,
                fontFamily: '"Nunito Sans", sans-serif',
                textTransform: 'none',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                borderRadius: '50px',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.15)',
                '&:hover': {
                  backgroundColor: '#E2E8F0',
                  color: '#000000',
                },
              }}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
            <IconButton
              component="a"
              href={`tel:${dealershipData.phoneRaw}`}
              sx={{
                color: '#D32F2F',
                border: '1px solid rgba(211, 47, 47, 0.3)',
                p: 1,
              }}
              aria-label="Call Dealership"
            >
              <PhoneIcon fontSize="small" />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#0F172A', ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              backgroundColor: '#FFFFFF',
              backgroundImage: 'none',
              borderLeft: '1px solid #E2E8F0',
              p: 2.5,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#D32F2F' }}>
            BOLT RE
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#0F172A' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ mb: 3 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                mb: 1,
                color: '#0F172A',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(211, 47, 47, 0.08)',
                  color: '#D32F2F',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: { sx: { fontWeight: 700 } },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            variant="contained"
            fullWidth
            component="a"
            href={`https://wa.me/${dealershipData.whatsapp}?text=Hi%20Bolt%20Motorcycles,%20I%20would%20like%20to%20book%20a%20test%20ride.`}
            target="_blank"
            onClick={handleDrawerToggle}
            startIcon={<TwoWheelerIcon />}
            sx={{
              background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
              color: '#FFFFFF',
            }}
          >
            Book Test Ride
          </Button>

          <Button
            variant="outlined"
            fullWidth
            component="a"
            href={`tel:${dealershipData.phoneRaw}`}
            startIcon={<PhoneIcon />}
            sx={{ borderColor: '#D32F2F', color: '#D32F2F' }}
          >
            Call +91 63091 25551
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
