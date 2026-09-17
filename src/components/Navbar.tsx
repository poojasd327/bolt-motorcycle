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
        boxShadow: scrolled ? '0 4px 25px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 3 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 }, justifyContent: 'space-between' }}>
          {/* Logo & Dealership Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 18px rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <FlashOnIcon sx={{ color: '#09090B', fontSize: 25 }} />
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
                    fontSize: { xs: '1.15rem', md: '1.35rem' },
                    textTransform: 'uppercase',
                    fontFamily: '"Nunito Sans", sans-serif',
                  }}
                >
                  BOLT <Box component="span" sx={{ color: '#A1A1AA', fontWeight: 700 }}>MOTORCYCLES</Box>
                </Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.6 }}>
                <VerifiedIcon sx={{ color: '#38BDF8', fontSize: 14 }} />
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
                    backgroundColor: '#EF4444',
                    borderRadius: '1px',
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
              startIcon={<TwoWheelerIcon sx={{ fontSize: '1.1rem !important' }} />}
              sx={{
                px: 3.2,
                py: 1.1,
                fontSize: '0.88rem',
                fontWeight: 800,
                fontFamily: '"Nunito Sans", sans-serif',
                textTransform: 'none',
                backgroundColor: '#FFFFFF',
                color: '#09090B',
                borderRadius: '50px',
                boxShadow: '0 4px 18px rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#F4F4F5',
                  color: '#000000',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 6px 22px rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Book Test Ride
            </Button>
          </Box>

          {/* Mobile Actions & Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                p: 0.9,
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
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
              width: 290,
              backgroundColor: '#FFFFFF',
              backgroundImage: 'none',
              borderLeft: '1px solid #E2E8F0',
              p: 3,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: '#09090B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FlashOnIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900, color: '#09090B', fontSize: '1.05rem', lineHeight: 1.2 }}>
                BOLT <Box component="span" sx={{ color: '#71717A', fontWeight: 700 }}>RE</Box>
              </Typography>
              <Typography variant="caption" sx={{ color: '#71717A', fontSize: '0.65rem', fontWeight: 700 }}>
                HYDERABAD
              </Typography>
            </Box>
          </Box>

          <IconButton onClick={handleDrawerToggle} sx={{ color: '#09090B' }}>
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
                borderRadius: 2.5,
                mb: 0.8,
                color: '#09090B',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#F4F4F5',
                  color: '#000000',
                  pl: 2.5,
                },
              }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: { sx: { fontWeight: 700, fontSize: '0.95rem' } },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8, mt: 'auto' }}>
          <Button
            variant="contained"
            fullWidth
            component="a"
            href={`https://wa.me/${dealershipData.whatsapp}?text=Hi%20Bolt%20Motorcycles,%20I%20would%20like%20to%20book%20a%20test%20ride.`}
            target="_blank"
            onClick={handleDrawerToggle}
            startIcon={<TwoWheelerIcon />}
            sx={{
              backgroundColor: '#09090B',
              color: '#FFFFFF',
              borderRadius: '50px',
              py: 1.3,
              fontWeight: 800,
              '&:hover': {
                backgroundColor: '#27272A',
              },
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
            sx={{
              borderColor: '#09090B',
              color: '#09090B',
              borderRadius: '50px',
              py: 1.3,
              fontWeight: 700,
              '&:hover': {
                borderColor: '#27272A',
                backgroundColor: '#F4F4F5',
              },
            }}
          >
            Call +91 63091 25551
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

