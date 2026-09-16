'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Avatar,
  Chip,
  IconButton,
  Stack,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function TestimonialsSection() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % 2);
  };

  const handlePrev = () => {
    setScrollIndex((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <Box
      id="reviews"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderBottom: '1px solid #E2E8F0',
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
        {/* Header Section (Centered) */}
        <Box sx={{ textAlign: 'center', mb: 7, maxWidth: '750px', mx: 'auto' }}>
          <Chip
            label="Happy Riders"
            sx={{
              backgroundColor: '#F1F5F9',
              color: '#0F172A',
              fontWeight: 800,
              mb: 2,
              fontSize: '0.85rem',
              fontFamily: '"Nunito Sans", sans-serif',
              px: 1.5,
              py: 0.5,
              borderRadius: '20px',
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: '#0F172A',
              fontFamily: '"Nunito Sans", sans-serif',
              fontSize: { xs: '2rem', sm: '2.7rem', md: '3.2rem' },
              mb: 1.5,
              lineHeight: 1.15,
            }}
          >
            We have earned good reputation with riders
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              fontFamily: '"Nunito Sans", sans-serif',
            }}
          >
            Read about their experience riding with Bolt Motorcycles.
          </Typography>
        </Box>

        {/* 3 Unique Testimonial Cards Layout Container */}
        <Box sx={{ maxWidth: '1140px', mx: 'auto' }}>
          <Grid container spacing={3.5} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
          {/* Card 1: Left Chat Bubble Review Style */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                p: 3.5,
                height: '100%',
                minHeight: '430px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#000000',
                  boxShadow: '0 10px 28px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {/* Chat Message Bubbles */}
              <Stack spacing={2}>
                <Box
                  sx={{
                    backgroundColor: '#F4F4F6',
                    borderRadius: '16px',
                    p: 2.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#0F172A',
                      fontWeight: 600,
                      lineHeight: 1.6,
                      fontSize: '0.92rem',
                      fontFamily: '"Nunito Sans", sans-serif',
                    }}
                  >
                    Buying my Classic 350 from Bolt Motorcycles was seamless. Their attention to detail, transparent pricing, and delivery speed is unmatched.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: '#F4F4F6',
                    borderRadius: '16px',
                    p: 2,
                    maxWidth: '85%',
                    ml: 'auto',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748B',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      lineHeight: 1.5,
                      fontFamily: '"Nunito Sans", sans-serif',
                    }}
                  >
                    thank you! Thrilled to see it performing so well.
                  </Typography>
                </Box>
              </Stack>

              {/* User Avatar & Details */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 3 }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Ryan Sharma"
                  sx={{ width: 44, height: 44 }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem', fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Ryan Sharma
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Classic 350 Owner
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Card 2: Middle Featured Dark Contrast Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                backgroundColor: '#121212',
                color: '#FFFFFF',
                borderRadius: '24px',
                p: 3.5,
                height: '100%',
                minHeight: '430px',
                border: '1px solid #27272A',
                boxShadow: '0 8px 28px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#FFFFFF',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box>
                <Chip
                  label="FEATURED REVIEW"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.7rem',
                    fontFamily: '"Nunito Sans", sans-serif',
                    mb: 3,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '1.02rem',
                    lineHeight: 1.7,
                    fontFamily: '"Nunito Sans", sans-serif',
                  }}
                >
                  "The team at Bolt Motorcycles completely transformed my buying experience. It was fast, transparent, smooth, and we've already had amazing thumping rides across the state!"
                </Typography>
              </Box>

              {/* User Avatar & Info */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 3, borderTop: '1px solid #27272A' }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
                  alt="Kavya Rao"
                  sx={{ width: 44, height: 44, border: '2px solid #FFFFFF' }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1rem', fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Kavya Rao
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: '#A1A1AA', fontWeight: 600, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Hunter 350 Rider
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Card 3: Right Quote + Stats Metrics Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                p: 3.5,
                height: '100%',
                minHeight: '430px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#000000',
                  boxShadow: '0 10px 28px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {/* Quote Text */}
              <Typography
                variant="body1"
                sx={{
                  color: '#0F172A',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  lineHeight: 1.6,
                  fontFamily: '"Nunito Sans", sans-serif',
                }}
              >
                I loved how they took the time to understand every aspect of my riding preference and turned that insight into a powerful thumping machine.
              </Typography>

              {/* Stats Metrics Block */}
              <Box sx={{ my: 3 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 900, color: '#0F172A', fontFamily: '"Nunito Sans", sans-serif', fontSize: '1.8rem' }}
                    >
                      4.9 ★
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: '#64748B', fontWeight: 700, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      Customer Rating
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 900, color: '#0F172A', fontFamily: '"Nunito Sans", sans-serif', fontSize: '1.8rem' }}
                    >
                      4,500+
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: '#64748B', fontWeight: 700, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      Bikes Delivered
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              {/* Bottom Divider & User Avatar */}
              <Box sx={{ pt: 2.5, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt="Michael Ross"
                  sx={{ width: 44, height: 44 }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem', fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Michael Ross
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Himalayan 450 Adventurer
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Centered Bottom Control Arrows */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Stack direction="row" spacing={1.5}>
            <IconButton
              onClick={handlePrev}
              aria-label="Previous review"
              sx={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
                width: 44,
                height: 44,
                '&:hover': {
                  backgroundColor: '#262626',
                },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              aria-label="Next review"
              sx={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
                width: 44,
                height: 44,
                '&:hover': {
                  backgroundColor: '#262626',
                },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </Box>
        </Box>
      </Container>
    </Box>
  );
}
