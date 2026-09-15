'use client';

import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button, Chip } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ServicesSectionProps {
  onOpenServiceAppointment: () => void;
  onOpenTestRide: () => void;
}

export default function ServicesSection({ onOpenServiceAppointment, onOpenTestRide }: ServicesSectionProps) {
  const services = [
    {
      icon: <StorefrontIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'New Motorcycle Sales',
      subtitle: 'Complete RE Fleet Availability',
      description:
        'Step into our flagship Bolt Motorcycles showroom to experience the full lineup of Royal Enfield motorcycles with live color options and custom accessories.',
      actionText: 'Explore Fleet',
      actionLink: '#models',
    },
    {
      icon: <BuildCircleIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'Authorised Service Bay',
      subtitle: 'Certified Master Technicians',
      description:
        'Express service bays equipped with Royal Enfield computerized diagnostics, automated oil pumps, and precision tuning for smooth thumping rides.',
      actionText: 'Book Service',
      actionHandler: onOpenServiceAppointment,
    },
    {
      icon: <SettingsSuggestIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: '100% Genuine Spare Parts',
      subtitle: 'Factory Certified Oils & Spares',
      description:
        'Maintain original performance with authentic Royal Enfield engine lubricants, spark plugs, brake pads, cables, and body kits.',
      actionText: 'Enquire Parts',
      actionHandler: onOpenServiceAppointment,
    },
    {
      icon: <CheckroomIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'RE Riding Gear & Accessories',
      subtitle: 'Authentic Protection & Style',
      description:
        'Equip your adventure with ECE/DOT-certified Royal Enfield helmets, leather riding jackets, waterproof gloves, saddlebags, and leg guards.',
      actionText: 'Browse Apparel',
      actionLink: '#contact',
    },
    {
      icon: <AccountBalanceIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'Easy Finance & EMI Desk',
      subtitle: 'Low Down Payments & Attractive ROI',
      description:
        'Hassle-free loan approvals with leading financial institutions. Minimal documentation, flexible tenure options, and instant spot approval.',
      actionText: 'Calculate EMI',
      actionLink: '#emi-calculator',
    },
    {
      icon: <SwapHorizIcon sx={{ color: '#800000', fontSize: 40 }} />,
      title: 'Bike Exchange & Evaluation',
      subtitle: 'Instant Trade-In Valuation',
      description:
        'Upgrade to your dream Royal Enfield seamlessly. Bring any two-wheeler for transparent evaluation and attractive exchange bonus benefits.',
      actionText: 'Get Trade Valuation',
      actionLink: '#contact',
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#F2EDE4',
        position: 'relative',
        borderBottom: '1px solid rgba(128, 0, 0, 0.15)',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="END-TO-END RIDER CARE"
            sx={{
              backgroundColor: 'rgba(128, 0, 0, 0.1)',
              color: '#800000',
              fontWeight: 800,
              mb: 2,
              letterSpacing: '0.08em',
              border: '1px solid rgba(128, 0, 0, 0.25)',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: '#291C0E',
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.3rem' },
              mb: 2,
            }}
          >
            DEALERSHIP <Box component="span" sx={{ color: '#800000' }}>SERVICES & FACILITIES</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#633A2C', maxWidth: '700px', mx: 'auto', fontSize: '1.05rem' }}>
            From your very first enquiry to expert after-sales care, Bolt Motorcycles offers world-class facilities and dedicated support for every Royal Enfield owner.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#F8F5EE',
                  border: '1px solid rgba(184, 132, 44, 0.3)',
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(41, 28, 14, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: '#800000',
                    transform: 'translateY(-6px)',
                    boxShadow: '0 15px 35px rgba(128, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ mb: 2.5 }}>{service.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#291C0E', mb: 0.5 }}>
                  {service.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#633A2C', fontWeight: 700, mb: 2, display: 'block' }}>
                  {service.subtitle}
                </Typography>
                <Typography variant="body2" sx={{ color: '#633A2C', mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                  {service.description}
                </Typography>

                <Box sx={{ pt: 2, borderTop: '1px solid rgba(99, 58, 44, 0.12)' }}>
                  {service.actionHandler ? (
                    <Button
                      variant="text"
                      onClick={service.actionHandler}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ color: '#800000', p: 0, fontWeight: 700, '&:hover': { color: '#633A2C', background: 'transparent' } }}
                    >
                      {service.actionText}
                    </Button>
                  ) : (
                    <Button
                      variant="text"
                      component="a"
                      href={service.actionLink}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ color: '#800000', p: 0, fontWeight: 700, '&:hover': { color: '#633A2C', background: 'transparent' } }}
                    >
                      {service.actionText}
                    </Button>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
