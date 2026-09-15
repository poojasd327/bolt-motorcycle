'use client';

import React from 'react';
import { Container, Box, Typography, Grid, Link, Divider, Stack } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { dealershipData } from '../data/dealershipInfo';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#F8F9FA',
        pt: 8,
        pb: 4,
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        color: '#475569',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Brand Col */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #800000 0%, #A32A2A 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FlashOnIcon sx={{ color: '#FFFFFF', fontSize: 26 }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, color: '#0F172A', letterSpacing: '0.04em' }}>
                  BOLT MOTORCYCLES
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <VerifiedIcon sx={{ color: '#800000', fontSize: 13 }} />
                  <Typography variant="caption" sx={{ color: '#475569', fontWeight: 800 }}>
                    Authorised RE Dealership
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.7, mb: 3 }}>
              Bolt Motorcycles is an authorised Royal Enfield dealership delivering an exceptional motorcycle-buying and ownership experience since 2021. Built on process-driven excellence, customer-first service, and lifelong rider camaraderie.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#hero" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                Home
              </Link>
              <Link href="#models" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                RE Motorcycles
              </Link>
              <Link href="#about" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                About Bolt
              </Link>
              <Link href="#services" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                Workshop & Services
              </Link>
              <Link href="#emi-calculator" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                EMI Calculator
              </Link>
            </Stack>
          </Grid>

          {/* Popular Bikes */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
              Popular Models
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#models" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                Hunter 350
              </Link>
              <Link href="#models" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                Classic 350 Reborn
              </Link>
              <Link href="#models" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                Himalayan 450
              </Link>
              <Link href="#models" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                Bullet 350
              </Link>
              <Link href="#models" color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                Continental GT 650
              </Link>
            </Stack>
          </Grid>

          {/* Direct Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
              Dealership Desk
            </Typography>
            <Typography variant="body2" sx={{ color: '#0F172A', mb: 1, fontWeight: 700 }}>
              Bolt Motorcycles LLP
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5, fontSize: '0.88rem' }}>
              Established in 2021
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ color: '#800000', fontSize: 18 }} />
              <Link href={`tel:${dealershipData.phoneRaw}`} color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                {dealershipData.phone}
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ color: '#800000', fontSize: 18 }} />
              <Link href={`mailto:${dealershipData.email}`} color="inherit" underline="hover" sx={{ '&:hover': { color: '#800000' } }}>
                {dealershipData.email}
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.08)', mb: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#475569' }}>
            © {new Date().getFullYear()} Bolt Motorcycles LLP. Authorised Royal Enfield Dealership. All Rights Reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: '#475569' }}>
            Royal Enfield, Classic, Bullet, Hunter, Himalayan & Meteor are registered trademarks of Eicher Motors Ltd.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
