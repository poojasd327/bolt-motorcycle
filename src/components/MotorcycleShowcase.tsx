'use client';

import React, { useState, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  TextField,
  InputAdornment,
  Stack,
  Chip,
  Tooltip,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motorcycles } from '../data/motorcycles';
import { dealershipData } from '../data/dealershipInfo';

const categories = ['All', 'Roadster', 'Cruiser', 'Adventure', 'Cafe Racer'];
const cities = ['Hyderabad', 'Delhi', 'Bengaluru', 'Mumbai', 'Chennai', 'Kolkata'];

export default function MotorcycleShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('Hyderabad');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredBikes = motorcycles.filter((bike) => {
    const matchesCategory =
      selectedCategory === 'All' || bike.category === selectedCategory;
    const matchesSearch =
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.displacement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 350;
      const scrollAmount = cardWidth + 20;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      id="models"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderBottom: '1px solid #E2E8F0',
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
        {/* Top Header Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
            maxWidth: '850px',
            mx: 'auto',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 800,
              color: '#64748B',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              fontFamily: '"Nunito Sans", sans-serif',
              mb: 0.8,
            }}
          >
            DISCOVER YOUR RIDE
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: '#0F172A',
              fontFamily: '"Nunito Sans", sans-serif',
              fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.3rem' },
              mb: 1.5,
              lineHeight: 1.15,
            }}
          >
            ROYAL ENFIELD <Box component="span" sx={{ color: '#000000' }}>MOTORCYCLE LINEUP</Box>
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
            Discover the iconic machine crafted for your riding style. Experience unmatched character, power, and thumping legacy at Bolt Motorcycles.
          </Typography>
        </Box>

        {/* Tab Filter Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            borderBottom: '1px solid #E2E8F0',
            mb: 4,
          }}
        >
          {/* Category Tabs with Red Indicator */}
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#D32F2F', // Red accent underline indicator from screenshot
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
              '& .MuiTab-root': {
                color: '#64748B',
                fontWeight: 700,
                fontSize: '0.98rem',
                fontFamily: '"Nunito Sans", sans-serif',
                textTransform: 'none',
                minWidth: 'auto',
                px: 2.5,
                py: 1.5,
                '&.Mui-selected': {
                  color: '#0F172A',
                },
                '&:hover': {
                  color: '#000000',
                },
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>
        </Box>

        {/* Horizontal Carousel Container */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            gap: 2.5,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            py: 1.5,
            px: 0.5,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {filteredBikes.map((bike) => (
            <Box
              key={bike.id}
              sx={{
                flex: '0 0 auto',
                width: { xs: '290px', sm: '320px', md: 'calc((100% - 40px) / 3)' },
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card Container */}
              <Box
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  p: 2.5,
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                    transform: 'translateY(-4px)',
                  },
                  '&:hover .bike-image': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    backgroundColor: '#F3F4F7',
                    borderRadius: '16px',
                    height: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Bike Image filling entire container */}
                  <Box
                    component="img"
                    src={bike.imageUrl}
                    alt={bike.name}
                    className="bike-image"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                </Box>

                {/* Bike Name */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: '#0F172A',
                    fontFamily: '"Nunito Sans", sans-serif',
                    textAlign: 'center',
                    mt: 2.5,
                    mb: 0.5,
                    fontSize: '1.4rem',
                  }}
                >
                  {bike.name}
                </Typography>

                {/* Specs Grid with Vertical Dividers (Engine Capacity | Power | Weight) */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 1.5,
                    px: 1,
                    my: 1,
                    borderTop: '1px solid #F1F5F9',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  {/* Engine Capacity */}
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: '#64748B', display: 'block', fontSize: '0.72rem', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      Engine Capacity
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', mt: 0.3, fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      {bike.displacement}
                    </Typography>
                  </Box>

                  {/* Vertical Divider */}
                  <Box sx={{ width: '1px', height: '28px', backgroundColor: '#E2E8F0' }} />

                  {/* Power */}
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: '#64748B', display: 'block', fontSize: '0.72rem', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      Power
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', mt: 0.3, fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      {bike.power.split('@')[0].trim()}
                    </Typography>
                  </Box>

                  {/* Vertical Divider */}
                  <Box sx={{ width: '1px', height: '28px', backgroundColor: '#E2E8F0' }} />

                  {/* Weight */}
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: '#64748B', display: 'block', fontSize: '0.72rem', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      Weight
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', mt: 0.3, fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      {bike.weight}
                    </Typography>
                  </Box>
                </Box>

                {/* Color Swatches */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    my: 1.5,
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#94A3B8', fontSize: '0.75rem', mr: 0.5, fontFamily: '"Nunito Sans", sans-serif' }}>
                    Colors:
                  </Typography>
                  {bike.colors.map((c, i) => (
                    <Tooltip key={i} title={c.name} arrow placement="top">
                      <Box
                        sx={{
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          backgroundColor: c.hex,
                          border: '1.5px solid rgba(0, 0, 0, 0.2)',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'scale(1.25)',
                            borderColor: '#000000',
                          },
                        }}
                      />
                    </Tooltip>
                  ))}
                </Box>

                {/* Price and CTA */}
                <Box sx={{ mt: 'auto', pt: 1.5, textAlign: 'center' }}>
                  <Typography
                    variant="caption"
                    sx={{ color: '#64748B', display: 'block', fontSize: '0.75rem', fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Starting at
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: '#0F172A',
                      fontFamily: '"Nunito Sans", sans-serif',
                      mb: 2,
                    }}
                  >
                    ₹ {bike.priceStarting.toLocaleString('en-IN')} /-
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    component="a"
                    href={`https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent(`Hi Bolt Motorcycles, I would like to book a test ride for ${bike.name}.`)}`}
                    target="_blank"
                    startIcon={<TwoWheelerIcon fontSize="small" />}
                    sx={{
                      py: 1.2,
                      borderRadius: '12px',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      fontFamily: '"Nunito Sans", sans-serif',
                      textTransform: 'none',
                      background: '#000000',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        background: '#262626',
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                      },
                    }}
                  >
                    Book Test Ride
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Navigation Arrows centered below the bike cards container */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4,
          }}
        >
          <IconButton
            onClick={() => handleScroll('left')}
            aria-label="Previous bikes"
            sx={{
              border: '1px solid #CBD5E1',
              backgroundColor: '#FFFFFF',
              color: '#0F172A',
              width: 48,
              height: 48,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#000000',
                color: '#FFFFFF',
                borderColor: '#000000',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => handleScroll('right')}
            aria-label="Next bikes"
            sx={{
              border: '1px solid #CBD5E1',
              backgroundColor: '#FFFFFF',
              color: '#0F172A',
              width: 48,
              height: 48,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#000000',
                color: '#FFFFFF',
                borderColor: '#000000',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
