'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Stack,
} from '@mui/material';
import { dealershipData } from '../data/dealershipInfo';

export default function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: '#0F0F10',
        backgroundImage: `url('/right.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        color: '#FFFFFF',
        position: 'relative',
        height: '100dvh',
        minHeight: '100dvh',
        pt: { xs: 12, md: 14 },
        pb: { xs: 6, md: 8 },
        display: 'flex',
        alignItems: 'center',
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
        <Box sx={{ maxWidth: '850px', ml: { md: -5 } }}>
          {/* White Accent Line */}
          <Box
            sx={{
              width: '70px',
              height: '3px',
              backgroundColor: '#FFFFFF',
              mb: 4,
              borderRadius: '2px',
            }}
          />

          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              mb: 3,
              fontFamily: '"Nunito Sans", sans-serif',
            }}
          >
            Welcome to Bolt Motorcycles,
            <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
            your premier Royal Enfield
            <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
            dealership in Hyderabad
          </Typography>

          {/* Subtitle Description */}
          <Typography
            variant="body1"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.7,
              mb: 5,
              maxWidth: '680px',
              fontWeight: 400,
              fontFamily: '"Nunito Sans", sans-serif',
            }}
          >
            Experience legendary motorcycling sales, certified express service bays, genuine Royal Enfield apparel & accessories, and easy low-ROI finance.
          </Typography>

          {/* Rounded Pill CTA Buttons */}
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
            {/* Primary White Pill Button */}
            <Button
              component="a"
              href="#models"
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                borderRadius: '50px',
                px: 4,
                py: 1.6,
                fontSize: '0.95rem',
                fontWeight: 800,
                textTransform: 'none',
                fontFamily: '"Nunito Sans", sans-serif',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.15)',
                '&:hover': {
                  backgroundColor: '#E2E8F0',
                  color: '#000000',
                },
              }}
            >
              Browse bikes
            </Button>

            {/* Secondary Translucent Glass Pill Button */}
            <Button
              component="a"
              href={`https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I would like to book a test ride.')}`}
              target="_blank"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '50px',
                px: 4,
                py: 1.6,
                fontSize: '0.95rem',
                fontWeight: 800,
                textTransform: 'none',
                fontFamily: '"Nunito Sans", sans-serif',
                backdropFilter: 'blur(8px)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.22)',
                  borderColor: '#FFFFFF',
                },
              }}
            >
              Book Test Ride
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
