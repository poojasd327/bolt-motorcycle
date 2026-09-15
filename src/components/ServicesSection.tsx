'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { dealershipData } from '../data/dealershipInfo';

export default function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Number of cards visible simultaneously
  const visibleCards = isMobile ? 1 : isTablet ? 2 : 3;

  const services = [
    {
      icon: <StorefrontIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'New Motorcycle Sales',
      subtitle: 'Complete RE Fleet Availability',
      description:
        'Step into our flagship Bolt Motorcycles showroom to experience the full lineup of Royal Enfield motorcycles with live color options and custom accessories.',
      actionText: 'Explore Fleet',
      actionLink: '#models',
      external: false,
    },
    {
      icon: <BuildCircleIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'Authorised Service Bay',
      subtitle: 'Certified Master Technicians',
      description:
        'Express service bays equipped with Royal Enfield computerized diagnostics, automated oil pumps, and precision tuning for smooth thumping rides.',
      actionText: 'Book Service',
      actionLink: `https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I would like to book a service appointment for my Royal Enfield motorcycle.')}`,
      external: true,
    },
    {
      icon: <SettingsSuggestIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: '100% Genuine Spare Parts',
      subtitle: 'Factory Certified Oils & Spares',
      description:
        'Maintain original performance with authentic Royal Enfield engine lubricants, spark plugs, brake pads, cables, and body kits.',
      actionText: 'Enquire Parts',
      actionLink: `https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I would like to enquire about genuine RE spare parts.')}`,
      external: true,
    },
    {
      icon: <CheckroomIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'RE Riding Gear & Accessories',
      subtitle: 'Authentic Protection & Style',
      description:
        'Equip your adventure with ECE/DOT-certified Royal Enfield helmets, leather riding jackets, waterproof gloves, saddlebags, and leg guards.',
      actionText: 'Browse Apparel',
      actionLink: `https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I am interested in RE riding gear and accessories.')}`,
      external: true,
    },
    {
      icon: <AccountBalanceIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'Easy Finance & EMI Desk',
      subtitle: 'Low Down Payments & Attractive ROI',
      description:
        'Hassle-free loan approvals with leading financial institutions. Minimal documentation, flexible tenure options, and instant spot approval.',
      actionText: 'Calculate EMI',
      actionLink: '#emi-calculator',
      external: false,
    },
    {
      icon: <SwapHorizIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'Bike Exchange & Evaluation',
      subtitle: 'Instant Trade-In Valuation',
      description:
        'Upgrade to your dream Royal Enfield seamlessly. Bring any two-wheeler for transparent evaluation and attractive exchange bonus benefits.',
      actionText: 'Get Trade Valuation',
      actionLink: `https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I would like to get a trade-in valuation for my motorcycle.')}`,
      external: true,
    },
  ];

  const maxIndex = Math.max(0, services.length - visibleCards);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keep index within valid range when screen resizes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#F8F9FA',
        position: 'relative',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-end' },
            mb: 6,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box>
            <Chip
              label="END-TO-END RIDER CARE"
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
                mb: 1,
              }}
            >
              DEALERSHIP <Box component="span" sx={{ color: '#800000' }}>SERVICES & FACILITIES</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', maxWidth: '650px', fontSize: '1.05rem' }}>
              From your very first enquiry to expert after-sales care, Bolt Motorcycles offers world-class facilities for every Royal Enfield owner.
            </Typography>
          </Box>

          {/* Navigation Slider Buttons */}
          <Stack direction="row" spacing={1.5} sx={{ mt: { xs: 3, md: 0 } }}>
            <IconButton
              onClick={handlePrev}
              disabled={currentIndex === 0}
              sx={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                color: '#800000',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                '&:hover': {
                  backgroundColor: '#800000',
                  color: '#FFFFFF',
                  borderColor: '#800000',
                },
                '&.Mui-disabled': {
                  opacity: 0.3,
                  backgroundColor: '#F1F5F9',
                },
              }}
              aria-label="Previous Slide"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              sx={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                color: '#800000',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                '&:hover': {
                  backgroundColor: '#800000',
                  color: '#FFFFFF',
                  borderColor: '#800000',
                },
                '&.Mui-disabled': {
                  opacity: 0.3,
                  backgroundColor: '#F1F5F9',
                },
              }}
              aria-label="Next Slide"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        {/* Slider Viewport Container */}
        <Box sx={{ overflow: 'hidden', mx: -1.5, py: 1 }}>
          <Box
            sx={{
              display: 'flex',
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {services.map((service, idx) => (
              <Box
                key={idx}
                sx={{
                  minWidth: `${100 / visibleCards}%`,
                  maxWidth: `${100 / visibleCards}%`,
                  px: 1.5,
                  boxSizing: 'border-box',
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    minHeight: 330,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: '#800000',
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 32px rgba(128, 0, 0, 0.12)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2.5 }}>{service.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#475569', fontWeight: 700, mb: 2, display: 'block' }}>
                    {service.subtitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                    {service.description}
                  </Typography>

                  <Box sx={{ pt: 2, borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                    <Button
                      variant="text"
                      component="a"
                      href={service.actionLink}
                      target={service.external ? '_blank' : undefined}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: '#800000',
                        p: 0,
                        fontWeight: 700,
                        '&:hover': { color: '#600000', background: 'transparent' },
                      }}
                    >
                      {service.actionText}
                    </Button>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Carousel Pagination Dots */}
        <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mt: 4 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <Box
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              sx={{
                width: currentIndex === dotIdx ? 28 : 10,
                height: 10,
                borderRadius: '5px',
                backgroundColor: currentIndex === dotIdx ? '#800000' : 'rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#800000',
                },
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
