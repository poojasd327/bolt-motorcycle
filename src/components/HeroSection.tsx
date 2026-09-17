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
        backgroundImage: {
          xs: `url('/bolt_mob.png')`,
          md: `linear-gradient(rgba(15, 15, 16, 0.35), rgba(15, 15, 16, 0.45)), url('/right.jpg')`,
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: {
          xs: 'scroll',
          md: 'fixed',
        },
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
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 3 } }}>
        <Box
          sx={{
            maxWidth: '850px',
            mx: { xs: 'auto', md: 0 },
            textAlign: { xs: 'center', md: 'left' },
            transform: { xs: 'translateY(-80px)', md: 'translateY(-30px)' },
          }}
        >
          {/* White Accent Line */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '70px',
              height: '3px',
              backgroundColor: '#FFFFFF',
              mb: 4,
              borderRadius: '2px',
              mx: { xs: 'auto', md: 0 },
            }}
          />

          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '30px', sm: '2.8rem', md: '3.2rem' },
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              mb: { xs: '14px', md: 3 },
              fontFamily: '"Nunito Sans", sans-serif',
              textAlign: { xs: 'center', md: 'left' },
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
              mb: { xs: '20px', md: 5 },
              maxWidth: '680px',
              fontWeight: 400,
              fontFamily: '"Nunito Sans", sans-serif',
              mx: { xs: 'auto', md: 0 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Experience legendary motorcycling sales, certified express service bays, genuine Royal Enfield apparel & accessories, and easy low-ROI finance.
          </Typography>

          {/* Rounded Pill CTA Buttons */}
          <Stack
            direction="row"
            spacing={{ xs: 1.5, sm: 2 }}
            sx={{
              flexWrap: 'nowrap',
              width: '100%',
              maxWidth: { xs: '450px', md: '100%' },
              mx: { xs: 'auto', md: 0 },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            {/* Primary White Pill Button */}
            <Button
              component="a"
              href="#models"
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                borderRadius: '50px',
                px: { xs: 2, sm: 4 },
                py: { xs: 1.2, sm: 1.6 },
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                fontWeight: 800,
                textTransform: 'none',
                fontFamily: '"Nunito Sans", sans-serif',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.15)',
                flex: { xs: 1, sm: 'initial' },
                textAlign: 'center',
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
                px: { xs: 2, sm: 4 },
                py: { xs: 1.2, sm: 1.6 },
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                fontWeight: 800,
                textTransform: 'none',
                fontFamily: '"Nunito Sans", sans-serif',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(8px)',
                flex: { xs: 1, sm: 'initial' },
                textAlign: 'center',
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
