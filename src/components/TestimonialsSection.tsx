'use client';

import React from 'react';
import { Container, Box, Typography, Grid, Paper, Rating, Avatar, Chip } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Vikramaditya Sharma',
      bikeBought: 'Royal Enfield Classic 350',
      rating: 5,
      date: 'August 2026',
      comment:
        'Purchased my Classic 350 from Bolt Motorcycles. From the initial test ride to delivery day, the experience was smooth and transparent. Special thanks to the management team for hassle-free finance approval!',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Kavya Reddy',
      bikeBought: 'Hunter 350 (Rebel Blue)',
      rating: 5,
      date: 'July 2026',
      comment:
        'Best RE Dealership in town! Bolt Motorcycles delivered my Hunter 350 within 48 hours. The team is super knowledgeable, helpful, and their after-sales service desk is top notch.',
      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Rohan Deshmukh',
      bikeBought: 'Himalayan 450 (Kamet White)',
      rating: 5,
      date: 'June 2026',
      comment:
        'Took my Himalayan 450 for the 10,000 km major service at Bolt Authorised Workshop. Certified mechanics did a thorough job with throttle calibration and liquid-coolant flush. Pure perfection!',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <Box
      id="reviews"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#F8F9FA',
        position: 'relative',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            icon={<VerifiedIcon sx={{ color: '#800000 !important' }} />}
            label="4.9 / 5.0 RATED DEALERSHIP"
            sx={{
              backgroundColor: 'rgba(128, 0, 0, 0.08)',
              color: '#800000',
              fontWeight: 800,
              mb: 2,
              letterSpacing: '0.08em',
              border: '1px solid rgba(128, 0, 0, 0.2)',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: '#0F172A',
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.3rem' },
              mb: 2,
            }}
          >
            WHAT OUR <Box component="span" sx={{ color: '#800000' }}>RIDERS SAY</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#475569', maxWidth: '700px', mx: 'auto', fontSize: '1.05rem' }}>
            Customer satisfaction is at the core of our approach. Hear real experiences from our proud Royal Enfield owners at Bolt Motorcycles.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {reviews.map((rev, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 4,
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#800000',
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 32px rgba(128, 0, 0, 0.12)',
                  },
                }}
              >
                <FormatQuoteIcon sx={{ color: 'rgba(128, 0, 0, 0.15)', fontSize: 50, position: 'absolute', top: 20, right: 20 }} />

                <Rating value={rev.rating} readOnly sx={{ color: '#800000', mb: 2 }} />

                <Typography variant="body1" sx={{ color: '#0F172A', lineHeight: 1.7, mb: 4, flexGrow: 1, fontStyle: 'italic' }}>
                  "{rev.comment}"
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 2, borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <Avatar src={rev.avatarUrl} alt={rev.name} sx={{ width: 48, height: 48, border: '2px solid #800000' }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A' }}>
                      {rev.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#800000', fontWeight: 700, display: 'block' }}>
                      {rev.bikeBought}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
