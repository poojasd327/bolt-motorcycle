'use client';

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import StarIcon from '@mui/icons-material/Star';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { dealershipData } from '../data/dealershipInfo';

// Animated Counter component that counts up smoothly when rendered
function AnimatedCounter({ targetValue }: { targetValue: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const rawNumberMatch = targetValue.match(/[\d,.]+/);
    if (!rawNumberMatch) return;
    const cleanNumberStr = rawNumberMatch[0].replace(/,/g, '');
    const targetNum = parseFloat(cleanNumberStr);

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(targetNum * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [targetValue]);

  if (targetValue.includes('.')) {
    return <>{count.toFixed(1) + targetValue.replace(/[\d,.]+/, '')}</>;
  }

  const rounded = Math.round(count);
  const formattedNum = targetValue.includes(',')
    ? rounded.toLocaleString('en-IN')
    : rounded.toString();

  return <>{targetValue.replace(/[\d,.]+/, formattedNum)}</>;
}

export default function StatsSection() {
  const statIcons = [
    <TwoWheelerIcon key="bike" sx={{ color: '#800000', fontSize: 28 }} />,
    <StarIcon key="star" sx={{ color: '#800000', fontSize: 28 }} />,
    <SpeedIcon key="speed" sx={{ color: '#800000', fontSize: 28 }} />,
    <EmojiEventsIcon key="trophy" sx={{ color: '#800000', fontSize: 28 }} />,
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        position: 'relative',
        zIndex: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {dealershipData.stats.map((stat, idx) => (
            <Grid size={{ xs: 6, md: 3 }} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'left',
                  backgroundColor: '#F8F9FA',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 4,
                  borderTop: '4px solid #800000',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: '#800000',
                    transform: 'translateY(-6px)',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 14px 32px rgba(128, 0, 0, 0.12)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2.5,
                    backgroundColor: 'rgba(128, 0, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {statIcons[idx % statIcons.length]}
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    fontFamily: '"Outfit", sans-serif',
                    mb: 0.5,
                    fontSize: { xs: '1.9rem', sm: '2.5rem' },
                    background: 'linear-gradient(135deg, #800000 0%, #A32A2A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  <AnimatedCounter targetValue={stat.value} />
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                  {stat.label}
                </Typography>
                <Typography variant="caption" sx={{ color: '#475569', display: 'block', fontWeight: 600, lineHeight: 1.4 }}>
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
