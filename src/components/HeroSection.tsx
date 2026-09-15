'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  Chip,
} from '@mui/material';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import ShieldCheckIcon from '@mui/icons-material/ShieldOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import { dealershipData } from '../data/dealershipInfo';

interface HeroSectionProps {
  onOpenTestRide: (modelName?: string) => void;
}

export default function HeroSection({ onOpenTestRide }: HeroSectionProps) {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        pt: { xs: 16, md: 22 },
        pb: { xs: 10, md: 14 },
        overflow: 'hidden',
        minHeight: { md: '88vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // Full Bleed Motorcycle Background Image with Rich Overlay
        backgroundImage: `linear-gradient(to right, rgba(41, 28, 14, 0.92) 0%, rgba(99, 58, 44, 0.8) 50%, rgba(41, 28, 14, 0.5) 100%), url("https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=90")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        borderBottom: '2px solid rgba(128, 0, 0, 0.3)',
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
                  icon={<VerifiedIcon sx={{ color: '#F8F5EE !important', fontSize: '18px !important' }} />}
                  label={`ROYAL ENFIELD AUTHORISED • EST. ${dealershipData.foundedYear}`}
                  sx={{
                    backgroundColor: 'rgba(248, 245, 238, 0.18)',
                    color: '#F8F5EE',
                    border: '1px solid rgba(248, 245, 238, 0.4)',
                    backdropFilter: 'blur(8px)',
                    py: 1.8,
                    px: 0.5,
                    fontWeight: 800,
                    fontSize: { xs: '0.75rem', sm: '0.82rem' },
                    letterSpacing: '0.04em',
                  }}
                />
                <Chip
                  label="🟢 SHOWROOM OPEN TODAY"
                  size="small"
                  sx={{
                    backgroundColor: '#800000',
                    color: '#F8F5EE',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    border: '1px solid #F8F5EE',
                  }}
                />
              </Stack>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.8rem' },
                  fontWeight: 900,
                  color: '#F8F5EE',
                  textTransform: 'uppercase',
                  lineHeight: 1.05,
                  mb: 2.5,
                  fontFamily: '"Outfit", sans-serif',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                FEEL THE THUMP.{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #F8F5EE 0%, #B8842C 70%, #F8F5EE 100%)',
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
                  color: '#F8F5EE',
                  fontSize: { xs: '1.05rem', sm: '1.25rem' },
                  lineHeight: 1.7,
                  mb: 4.5,
                  maxWidth: '720px',
                  opacity: 0.95,
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                Welcome to <strong style={{ color: '#F8F5EE', textDecoration: 'underline decoration-color-#800000' }}>Bolt Motorcycles</strong>. Your premier authorized Royal Enfield dealership. Experience legendary motorcycling sales, certified express maintenance, genuine accessories, and hassle-free finance solutions since 2021.
              </Typography>

              {/* CTAs */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ mb: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => onOpenTestRide()}
                  startIcon={<TwoWheelerIcon />}
                  sx={{
                    px: 4.5,
                    py: 2,
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    boxShadow: '0 10px 30px rgba(128, 0, 0, 0.5)',
                    backgroundColor: '#800000',
                    color: '#F8F5EE',
                    border: '1px solid #B8842C',
                    '&:hover': {
                      backgroundColor: '#633A2C',
                    },
                  }}
                >
                  Book Test Ride Now
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="#models"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    borderColor: '#F8F5EE',
                    color: '#F8F5EE',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(41, 28, 14, 0.4)',
                    '&:hover': {
                      borderColor: '#F8F5EE',
                      backgroundColor: 'rgba(248, 245, 238, 0.25)',
                    },
                  }}
                >
                  Explore All Bikes
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href={`tel:${dealershipData.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{
                    px: 3,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderColor: 'rgba(248, 245, 238, 0.5)',
                    color: '#F8F5EE',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(41, 28, 14, 0.4)',
                    '&:hover': {
                      borderColor: '#800000',
                      backgroundColor: 'rgba(128, 0, 0, 0.2)',
                    },
                  }}
                >
                  Call +91 63091 25551
                </Button>
              </Stack>

              {/* Trust Indicators */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ pt: 3, borderTop: '1px solid rgba(248, 245, 238, 0.25)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ShieldCheckIcon sx={{ color: '#B8842C', fontSize: 24 }} />
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#F8F5EE' }}>
                    100% Genuine RE Parts & Accessories
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SpeedIcon sx={{ color: '#B8842C', fontSize: 24 }} />
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#F8F5EE' }}>
                    Authorized Express Service Bays
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Stats Strip */}
        <Grid container spacing={2.5} sx={{ mt: { xs: 5, md: 8 } }}>
          {dealershipData.stats.map((stat, idx) => (
            <Grid size={{ xs: 6, md: 3 }} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'rgba(248, 245, 238, 0.94)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(128, 0, 0, 0.25)',
                  boxShadow: '0 12px 30px rgba(41, 28, 14, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#800000',
                    transform: 'translateY(-4px)',
                    backgroundColor: '#F8F5EE',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    color: '#800000',
                    fontFamily: '"Outfit", sans-serif',
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#291C0E', mb: 0.5 }}>
                  {stat.label}
                </Typography>
                <Typography variant="caption" sx={{ color: '#633A2C', display: 'block', fontWeight: 600 }}>
                  {stat.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
