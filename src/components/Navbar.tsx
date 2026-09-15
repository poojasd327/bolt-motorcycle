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

interface NavbarProps {
  onOpenTestRide: (modelName?: string) => void;
}

export default function Navbar({ onOpenTestRide }: NavbarProps) {
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
          ? 'rgba(242, 237, 228, 0.95)'
          : 'linear-gradient(to bottom, rgba(242, 237, 228, 0.98), rgba(242, 237, 228, 0.88))',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(128, 0, 0, 0.2)'
          : '1px solid rgba(99, 58, 44, 0.12)',
        boxShadow: scrolled ? '0 8px 30px rgba(41, 28, 14, 0.08)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 }, justifyContent: 'space-between' }}>
          {/* Logo & Dealership Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #800000 0%, #633A2C 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(128, 0, 0, 0.3)',
              }}
            >
              <FlashOnIcon sx={{ color: '#F8F5EE', fontSize: 28 }} />
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
                    color: '#291C0E',
                    textDecoration: 'none',
                    fontSize: { xs: '1.25rem', md: '1.45rem' },
                    textTransform: 'uppercase',
                  }}
                >
                  BOLT <Box component="span" sx={{ color: '#800000' }}>MOTORCYCLES</Box>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <VerifiedIcon sx={{ color: '#800000', fontSize: 13 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#633A2C',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    fontSize: '0.68rem',
                    textTransform: 'uppercase',
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
                  color: '#291C0E',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.01em',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#800000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-4px',
                    left: '0',
                    backgroundColor: '#800000',
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
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Button
              component="a"
              href={`tel:${dealershipData.phoneRaw}`}
              startIcon={<PhoneIcon sx={{ color: '#800000' }} />}
              sx={{
                color: '#291C0E',
                borderColor: 'rgba(128, 0, 0, 0.4)',
                backgroundColor: 'rgba(248, 245, 238, 0.8)',
                '&:hover': {
                  backgroundColor: 'rgba(128, 0, 0, 0.08)',
                  borderColor: '#800000',
                },
                fontSize: '0.88rem',
              }}
            >
              {dealershipData.phone}
            </Button>

            <Button
              variant="contained"
              onClick={() => onOpenTestRide()}
              startIcon={<TwoWheelerIcon />}
              sx={{
                px: 3,
                py: 1.2,
                fontSize: '0.9rem',
                backgroundColor: '#800000',
                color: '#F8F5EE',
                '&:hover': {
                  backgroundColor: '#633A2C',
                },
              }}
            >
              Book Test Ride
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
            <IconButton
              component="a"
              href={`tel:${dealershipData.phoneRaw}`}
              sx={{
                color: '#800000',
                border: '1px solid rgba(128, 0, 0, 0.3)',
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
              sx={{ color: '#291C0E', ml: 0.5 }}
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
              backgroundColor: '#F2EDE4',
              backgroundImage: 'none',
              borderLeft: '1px solid rgba(128, 0, 0, 0.2)',
              p: 2.5,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000' }}>
            BOLT RE
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#291C0E' }}>
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
                color: '#291C0E',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(128, 0, 0, 0.1)',
                  color: '#800000',
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
            onClick={() => {
              handleDrawerToggle();
              onOpenTestRide();
            }}
            startIcon={<TwoWheelerIcon />}
            sx={{
              backgroundColor: '#800000',
              color: '#F8F5EE',
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
            sx={{ borderColor: '#800000', color: '#800000' }}
          >
            Call +91 63091 25551
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
