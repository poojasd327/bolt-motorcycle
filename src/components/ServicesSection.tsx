'use client';

import React from 'react';
import { Container, Box, Typography, Grid, Button, Stack, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { dealershipData } from '../data/dealershipInfo';

export default function ServicesSection() {
  const serviceCards = [
    {
      title: 'New Motorcycle Sales',
      description:
        'Step into our flagship Bolt Motorcycles showroom to experience the full lineup of Royal Enfield motorcycles with live color options and custom accessories.',
      actionText: 'Explore Fleet',
      actionLink: '#models',
      external: false,
    },
    {
      title: 'Authorised Service Bay',
      description:
        'Express service bays equipped with Royal Enfield computerized diagnostics, master technicians, automated oil pumps, and precision thumping tuning.',
      actionText: 'Book Service',
      actionLink: `https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I would like to book a service appointment for my Royal Enfield motorcycle.')}`,
      external: true,
    },
    {
      title: '100% Genuine Spare Parts & Gear',
      description:
        'Maintain peak performance with authentic Royal Enfield engine lubricants, spark plugs, brake pads, ECE helmets, and riding apparel.',
      actionText: 'Enquire Parts',
      actionLink: `https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I would like to enquire about genuine RE spare parts.')}`,
      external: true,
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 3 } }}>
        {/* Section Header (Centered) */}
        <Box sx={{ textAlign: 'center', mb: 7, maxWidth: '750px', mx: 'auto' }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 800,
              color: '#64748B',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              fontFamily: '"Nunito Sans", sans-serif',
              mb: 1,
            }}
          >
            END-TO-END RIDER CARE
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: '#0F172A',
              fontFamily: '"Nunito Sans", sans-serif',
              fontSize: { xs: '2rem', sm: '2.7rem', md: '3.2rem' },
              mb: 2,
              lineHeight: 1.15,
            }}
          >
            DEALERSHIP SERVICES & FACILITIES
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#475569',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              fontFamily: '"Nunito Sans", sans-serif',
            }}
          >
            From your very first enquiry to expert after-sales care, Bolt Motorcycles offers world-class facilities for every Royal Enfield owner.
          </Typography>
        </Box>

        {/* Bento Grid Layout */}
        <Grid container spacing={3} sx={{ alignItems: 'stretch', flexDirection: { xs: 'column', md: 'row' } }}>
          {/* Left Side: Tall Feature Image Card */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                minHeight: { xs: '380px', md: '480px' },
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                backgroundImage: `url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                p: 4,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {/* Dark Overlay Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.05) 100%)',
                }}
              />

              <Box sx={{ position: 'relative', zIndex: 2, color: '#FFFFFF' }}>
                <Chip
                  label="BOLT FLAGSHIP"
                  size="small"
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    fontWeight: 800,
                    fontSize: '0.7rem',
                    fontFamily: '"Nunito Sans", sans-serif',
                    mb: 1.5,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    fontFamily: '"Nunito Sans", sans-serif',
                    mb: 1,
                    fontSize: '1.6rem',
                    color: '#FFFFFF',
                  }}
                >
                  Pure Motorcycling Experience
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#D4D4D8',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    fontFamily: '"Nunito Sans", sans-serif',
                  }}
                >
                  Visit our state-of-the-art facility equipped with dedicated customer lounges, express bays, and full RE catalog.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: 2x2 Grid of Cards */}
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            <Grid container spacing={3} sx={{ height: { xs: 'auto', md: '100%' }, flexDirection: { xs: 'column', md: 'row' } }}>
              {/* Card 1: Top Left */}
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    p: 4,
                    height: '100%',
                    minHeight: { xs: 'auto', md: '220px' },
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#000000',
                      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontSize: '1.35rem',
                        mb: 1.5,
                      }}
                    >
                      {serviceCards[0].title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748B',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        fontFamily: '"Nunito Sans", sans-serif',
                      }}
                    >
                      {serviceCards[0].description}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Button
                      component="a"
                      href={serviceCards[0].actionLink}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: '#000000',
                        fontWeight: 800,
                        p: 0,
                        fontSize: '0.88rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                        '&:hover': { background: 'transparent', textDecoration: 'underline' },
                      }}
                    >
                      {serviceCards[0].actionText}
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Card 2: Top Right */}
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    p: 4,
                    height: '100%',
                    minHeight: { xs: 'auto', md: '220px' },
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#000000',
                      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontSize: '1.35rem',
                        mb: 1.5,
                      }}
                    >
                      {serviceCards[1].title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748B',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        fontFamily: '"Nunito Sans", sans-serif',
                      }}
                    >
                      {serviceCards[1].description}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Button
                      component="a"
                      href={serviceCards[1].actionLink}
                      target="_blank"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: '#000000',
                        fontWeight: 800,
                        p: 0,
                        fontSize: '0.88rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                        '&:hover': { background: 'transparent', textDecoration: 'underline' },
                      }}
                    >
                      {serviceCards[1].actionText}
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Card 3: Bottom Left */}
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    p: 4,
                    height: '100%',
                    minHeight: { xs: 'auto', md: '220px' },
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#000000',
                      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontSize: '1.35rem',
                        mb: 1.5,
                      }}
                    >
                      {serviceCards[2].title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748B',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        fontFamily: '"Nunito Sans", sans-serif',
                      }}
                    >
                      {serviceCards[2].description}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Button
                      component="a"
                      href={serviceCards[2].actionLink}
                      target="_blank"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: '#000000',
                        fontWeight: 800,
                        p: 0,
                        fontSize: '0.88rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                        '&:hover': { background: 'transparent', textDecoration: 'underline' },
                      }}
                    >
                      {serviceCards[2].actionText}
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Card 4: Bottom Right Image Card with Content Overlay */}
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    height: '100%',
                    minHeight: { xs: '240px', md: '220px' },
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    backgroundImage: `url('https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.15)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  {/* Dark Overlay Gradient for High Legibility */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.55) 100%)',
                      zIndex: 1,
                    }}
                  />

                  <Box sx={{ position: 'relative', zIndex: 2, color: '#FFFFFF' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: '#FFFFFF',
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontSize: '1.35rem',
                        mb: 1.5,
                      }}
                    >
                      Easy Finance & Trade-In
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#E4E4E7',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        fontFamily: '"Nunito", sans-serif',
                      }}
                    >
                      Hassle-free loan approvals with low down payments, attractive ROI, and instant two-wheeler exchange valuation.
                    </Typography>
                  </Box>

                  <Box sx={{ position: 'relative', zIndex: 2, mt: 3 }}>
                    <Button
                      component="a"
                      href="#emi-calculator"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 800,
                        p: 0,
                        fontSize: '0.88rem',
                        fontFamily: '"Nunito", sans-serif',
                        '&:hover': { background: 'transparent', textDecoration: 'underline' },
                      }}
                    >
                      Calculate EMI
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
