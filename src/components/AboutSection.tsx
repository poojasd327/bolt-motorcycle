'use client';

import React from 'react';
import { Container, Box, Typography, Grid, Paper, Chip } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { dealershipData } from '../data/dealershipInfo';

export default function AboutSection() {
  const pillars = [
    {
      icon: <VerifiedUserIcon sx={{ color: '#800000', fontSize: 36 }} />,
      title: 'Strong Process & Transparency',
      description: 'End-to-end well-defined processes from initial enquiry to transparent pricing and post-delivery assistance.',
    },
    {
      icon: <GroupsIcon sx={{ color: '#800000', fontSize: 36 }} />,
      title: 'Experienced Management',
      description: 'Led by seasoned automotive professionals dedicated to high operational standards and continuous innovation.',
    },
    {
      icon: <PrecisionManufacturingIcon sx={{ color: '#800000', fontSize: 36 }} />,
      title: 'Authorised Royal Enfield Service',
      description: 'State-of-the-art diagnostic bays, certified master mechanics, and 100% authentic spare parts.',
    },
    {
      icon: <HandshakeIcon sx={{ color: '#800000', fontSize: 36 }} />,
      title: 'Long-Term Relationship Care',
      description: 'We stay connected through rider clubs, service reminders, custom accessory builds, and community events.',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          {/* Text Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Chip
              label="OUR STORY & PHILOSOPHY"
              sx={{
                backgroundColor: 'rgba(128, 0, 0, 0.08)',
                color: '#800000',
                fontWeight: 800,
                mb: 2.5,
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
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              ABOUT <Box component="span" sx={{ color: '#800000' }}>BOLT MOTORCYCLES</Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#334155',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 3,
                fontWeight: 500,
              }}
            >
              {dealershipData.aboutUs.intro}
            </Typography>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: '#F8F9FA',
                borderLeft: '4px solid #800000',
                borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                borderRight: '1px solid rgba(0, 0, 0, 0.08)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: 2,
                mb: 3,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  fontSize: '1.02rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                "{dealershipData.aboutUs.growthPillars}"
              </Typography>
            </Paper>

            <Typography
              variant="body1"
              sx={{
                color: '#475569',
                fontSize: '1rem',
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              {dealershipData.aboutUs.satisfactionFocus}
            </Typography>
          </Grid>

          {/* Pillars Cards */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={3}>
              {pillars.map((pillar, idx) => (
                <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3.5,
                      height: '100%',
                      backgroundColor: '#F8F9FA',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: 4,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#800000',
                        transform: 'translateY(-6px)',
                        boxShadow: '0 12px 32px rgba(128, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{pillar.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}>
                      {pillar.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.6 }}>
                      {pillar.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
