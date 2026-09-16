'use client';

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
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
  return (
    <Box
      sx={{
        py: { xs: 6, md: 9 },
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        zIndex: 3,
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
        <Grid container sx={{ alignItems: 'center' }}>
          {dealershipData.stats.map((stat, idx) => (
            <Grid
              key={idx}
              size={{ xs: 6, md: 3 }}
              sx={{
                textAlign: 'center',
                py: { xs: 2.5, md: 1 },
                px: { xs: 1.5, md: 3 },
                borderRight: {
                  xs: idx % 2 === 0 ? '1px solid #E2E8F0' : 'none',
                  md: idx < 3 ? '1px solid #E2E8F0' : 'none',
                },
                borderBottom: {
                  xs: idx < 2 ? '1px solid #E2E8F0' : 'none',
                  md: 'none',
                },
              }}
            >
              {/* Big Metric Number */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#0F172A',
                  fontFamily: '"Nunito Sans", sans-serif',
                  fontSize: { xs: '2.5rem', sm: '3.3rem', md: '3.8rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                <AnimatedCounter targetValue={stat.value} />
              </Typography>

              {/* Metric Label */}
              <Typography
                variant="body1"
                sx={{
                  color: '#64748B',
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontFamily: '"Nunito Sans", sans-serif',
                  lineHeight: 1.3,
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
