'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Avatar,
  Chip,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  type: 'chat' | 'dark' | 'stats';
  chatMessage?: string;
  replyMessage?: string;
  tag?: string;
  text?: string;
  stat1?: { value: string; label: string };
  stat2?: { value: string; label: string };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ryan Sharma',
    role: 'Classic 350 Owner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    type: 'chat',
    chatMessage: 'Buying my Classic 350 from Bolt Motorcycles was seamless. Their attention to detail, transparent pricing, and delivery speed is unmatched.',
    replyMessage: 'Thank you! Thrilled to see it performing so well.',
  },
  {
    id: 2,
    name: 'Kavya Rao',
    role: 'Hunter 350 Rider',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    type: 'dark',
    tag: 'FEATURED REVIEW',
    text: '"The team at Bolt Motorcycles completely transformed my buying experience. It was fast, transparent, smooth, and we\'ve already had amazing thumping rides across the state!"',
  },
  {
    id: 3,
    name: 'Michael Ross',
    role: 'Himalayan 450 Adventurer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    type: 'stats',
    text: 'I loved how they took the time to understand every aspect of my riding preference and turned that insight into a powerful thumping machine.',
    stat1: { value: '4.9 ★', label: 'Customer Rating' },
    stat2: { value: '4,500+', label: 'Bikes Delivered' },
  },
  {
    id: 4,
    name: 'Arjun Mehta',
    role: 'Continental GT 650 Owner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    type: 'chat',
    chatMessage: 'Got my twin 650 delivered in just 3 days! The post-sales service and first free checkup at Bolt workshop was top notch.',
    replyMessage: 'Ride safe Arjun! Glad to serve you.',
  },
  {
    id: 5,
    name: 'Priya Nambiar',
    role: 'Bullet 350 Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    type: 'dark',
    tag: 'HIGHLY RECOMMENDED',
    text: '"Upgraded from my 150cc to the legendary Bullet 350. The staff walked me through every finance option patiently and made paperwork effortless!"',
  },
  {
    id: 6,
    name: 'Vikramaditya Verma',
    role: 'Interceptor 650 Rider',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    type: 'stats',
    text: 'Financed my Interceptor 650 with instant approval at low EMI rates right at the dealership desk. Super responsive customer care team.',
    stat1: { value: '100%', label: 'Genuine Spares' },
    stat2: { value: '24/7', label: 'Roadside Support' },
  },
  {
    id: 7,
    name: 'Sneha Kulkarni',
    role: 'Meteor 350 Cruiser',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    type: 'chat',
    chatMessage: 'The custom accessories installation on my Meteor 350 was done flawlessly. Windshield and touring seat fitted on spot.',
    replyMessage: 'Happy touring Sneha! Enjoy the long highway rides.',
  },
  {
    id: 8,
    name: 'Devendra Reddy',
    role: 'Scram 411 Rider',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    type: 'dark',
    tag: 'OFF-ROAD ENTHUSIAST',
    text: '"Took my Scram 411 for a 1200km Leh-Ladakh expedition right after the first service at Bolt. Engine performance was flawless throughout!"',
  },
  {
    id: 9,
    name: 'Ananya Deshmukh',
    role: 'Super Meteor 650 Owner',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    type: 'stats',
    text: 'Best Royal Enfield showroom experience in the region. Clean workshop, prompt master technicians, and genuine hospitality.',
    stat1: { value: '15+', label: 'Years Trust' },
    stat2: { value: '99%', label: 'Satisfaction Rate' },
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const effectiveIsMobile = isClient ? isMobile : false;
  const itemsPerPage = effectiveIsMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const safeCurrentPage = currentPage >= totalPages ? 0 : currentPage;

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    safeCurrentPage * itemsPerPage,
    safeCurrentPage * itemsPerPage + itemsPerPage
  );

  return (
    <Box
      id="reviews"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 3 } }}>
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

        {/* Testimonials Grid Container */}
        <Box sx={{ maxWidth: '1140px', mx: 'auto' }}>
          <Grid container spacing={3.5} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
            {visibleTestimonials.map((item) => (
              <Grid key={item.id} size={{ xs: 12, md: 4 }}>
                {item.type === 'chat' && (
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
                          {item.chatMessage}
                        </Typography>
                      </Box>

                      {item.replyMessage && (
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
                            {item.replyMessage}
                          </Typography>
                        </Box>
                      )}
                    </Stack>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 3 }}>
                      <Avatar
                        src={item.avatar}
                        alt={item.name}
                        sx={{ width: 44, height: 44 }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem', fontFamily: '"Nunito Sans", sans-serif' }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                        >
                          {item.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}

                {item.type === 'dark' && (
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
                        label={item.tag || 'FEATURED REVIEW'}
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
                        {item.text}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 3, borderTop: '1px solid #27272A' }}>
                      <Avatar
                        src={item.avatar}
                        alt={item.name}
                        sx={{ width: 44, height: 44, border: '2px solid #FFFFFF' }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1rem', fontFamily: '"Nunito Sans", sans-serif' }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: '#A1A1AA', fontWeight: 600, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                        >
                          {item.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}

                {item.type === 'stats' && (
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
                      {item.text}
                    </Typography>

                    {item.stat1 && item.stat2 && (
                      <Box sx={{ my: 3 }}>
                        <Grid container spacing={2}>
                          <Grid size={{ xs: 6 }}>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 900, color: '#0F172A', fontFamily: '"Nunito Sans", sans-serif', fontSize: '1.8rem' }}
                            >
                              {item.stat1.value}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: '#64748B', fontWeight: 700, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                            >
                              {item.stat1.label}
                            </Typography>
                          </Grid>

                          <Grid size={{ xs: 6 }}>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 900, color: '#0F172A', fontFamily: '"Nunito Sans", sans-serif', fontSize: '1.8rem' }}
                            >
                              {item.stat2.value}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: '#64748B', fontWeight: 700, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                            >
                              {item.stat2.label}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    )}

                    <Box sx={{ pt: 2.5, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        src={item.avatar}
                        alt={item.name}
                        sx={{ width: 44, height: 44 }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem', fontFamily: '"Nunito Sans", sans-serif' }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.78rem', fontFamily: '"Nunito Sans", sans-serif' }}
                        >
                          {item.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>

          {/* Centered Controls & Pagination Dots */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 5 }}>
            <Stack direction="row" spacing={1.5}>
              <IconButton
                onClick={handlePrev}
                aria-label="Previous reviews"
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
                aria-label="Next reviews"
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

            {/* Page Dots Indicator */}
            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  sx={{
                    width: currentPage === idx ? 24 : 8,
                    height: 8,
                    borderRadius: '4px',
                    backgroundColor: currentPage === idx ? '#EF4444' : '#CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
