'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Stack,
  Chip,
} from '@mui/material';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import ShieldCheckIcon from '@mui/icons-material/ShieldOutlined';
import { dealershipData } from '../data/dealershipInfo';

export default function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        pt: { xs: 16, md: 22 },
        pb: { xs: 12, md: 16 },
        overflow: 'hidden',
        minHeight: { md: '80vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // Transparent airy overlay over full bleed background
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0.15) 100%), url("https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=90")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          {/* Main Hero Column */}
          <Grid size={{ xs: 12, md: 10, lg: 8.5 }}>
            <Box>
              {/* Trust Badges */}
              <Stack direction="row" spacing={1.5} sx={{ mb: 3, flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                <Chip
                  icon={<VerifiedIcon sx={{ color: '#800000 !important', fontSize: '18px !important' }} />}
                  label={`ROYAL ENFIELD AUTHORISED • EST. ${dealershipData.foundedYear}`}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#0F172A',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                    py: 1.8,
                    px: 0.5,
                    fontWeight: 800,
                    fontSize: { xs: '0.75rem', sm: '0.82rem' },
                    letterSpacing: '0.04em',
                  }}
                />
              </Stack>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.8rem' },
                  fontWeight: 900,
                  color: '#0F172A',
                  textTransform: 'uppercase',
                  lineHeight: 1.05,
                  mb: 2.5,
                  fontFamily: '"Outfit", sans-serif',
                }}
              >
                FEEL THE THUMP.{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #800000 0%, #A32A2A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  MASTER THE ROAD.
                </Box>
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: '#1E293B',
                  fontSize: { xs: '1.05rem', sm: '1.25rem' },
                  lineHeight: 1.7,
                  mb: 4.5,
                  maxWidth: '720px',
                  fontWeight: 600,
                  textShadow: '0 1px 2px rgba(255,255,255,0.8)',
                }}
              >
                Welcome to <strong style={{ color: '#0F172A', textDecoration: 'underline decoration-color-#800000' }}>Bolt Motorcycles</strong>. Your premier authorized Royal Enfield dealership. Experience legendary motorcycling sales, certified express maintenance, genuine accessories, and finance solutions.
              </Typography>

              {/* Minimal Streamlined CTA */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ mb: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href="#models"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4.5,
                    py: 2,
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    boxShadow: '0 8px 25px rgba(128, 0, 0, 0.25)',
                    backgroundColor: '#800000',
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundColor: '#600000',
                    },
                  }}
                >
                  Explore All Bikes
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href={`https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I would like to book a test ride for a Royal Enfield bike.')}`}
                  target="_blank"
                  startIcon={<TwoWheelerIcon />}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    borderColor: '#0F172A',
                    color: '#0F172A',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      borderColor: '#800000',
                      color: '#800000',
                      backgroundColor: '#FFFFFF',
                    },
                  }}
                >
                  Book Test Ride
                </Button>
              </Stack>

              {/* Trust Indicators */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ pt: 3, borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ShieldCheckIcon sx={{ color: '#800000', fontSize: 24 }} />
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    100% Genuine RE Parts & Accessories
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SpeedIcon sx={{ color: '#800000', fontSize: 24 }} />
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    Authorized Express Service Bays
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
