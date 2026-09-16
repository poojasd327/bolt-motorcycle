'use client';

import React from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { dealershipData } from '../data/dealershipInfo';

export default function AboutSection() {
  const cards = dealershipData.aboutUs.highlights;

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#121212',
        color: '#FFFFFF',
        position: 'relative',
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
        {/* Header Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
          }}
        >
          {/* Subtitle & Title */}
          <Box sx={{ maxWidth: '850px', mx: 'auto', textAlign: 'center' }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: '#A1A1AA',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                fontFamily: '"Nunito Sans", sans-serif',
                mb: 1,
              }}
            >
              WHAT GUIDES US
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#FFFFFF',
                fontFamily: '"Nunito Sans", sans-serif',
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.3rem' },
                mb: 2,
                lineHeight: 1.15,
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#E4E4E7',
                fontSize: { xs: '0.98rem', md: '1.05rem' },
                lineHeight: 1.7,
                fontWeight: 400,
                fontFamily: '"Nunito Sans", sans-serif',
              }}
            >
              {dealershipData.aboutUs.intro}
            </Typography>
          </Box>
        </Box>

        {/* 4-Column Feature Dark Card Block */}
        <Box
          sx={{
            backgroundColor: '#1E1E20',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #27272A',
          }}
        >
          <Grid container>
            {cards.map((card, idx) => (
              <Grid
                key={idx}
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  p: { xs: 3.5, md: 4.5 },
                  borderRight: {
                    xs: 'none',
                    sm: idx % 2 === 0 ? '1px solid #27272A' : 'none',
                    md: idx < 3 ? '1px solid #27272A' : 'none',
                  },
                  borderBottom: {
                    xs: idx < 3 ? '1px solid #27272A' : 'none',
                    sm: idx < 2 ? '1px solid #27272A' : 'none',
                    md: 'none',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#27272A',
                  },
                }}
              >
                <Box>
                  {/* Card Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: '#FFFFFF',
                      fontFamily: '"Nunito Sans", sans-serif',
                      fontSize: '1.2rem !important',
                      lineHeight: 1.3,
                      minHeight: { md: '56px' },
                    }}
                  >
                    {card.title}
                  </Typography>

                  {/* Accent Underline */}
                  <Box
                    sx={{
                      width: '50px',
                      height: '3px',
                      backgroundColor: '#D32F2F',
                      my: 2.5,
                      borderRadius: '2px',
                    }}
                  />

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#A1A1AA',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      fontFamily: '"Nunito Sans", sans-serif',
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
