'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Stack,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { motorcycles } from '../data/motorcycles';
import { dealershipData } from '../data/dealershipInfo';

const categories = ['All', 'Roadster', 'Cruiser', 'Adventure', 'Cafe Racer'];

export default function MotorcycleShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredBikes = motorcycles.filter((bike) => {
    const matchesCategory =
      selectedCategory === 'All' || bike.category === selectedCategory;
    const matchesSearch =
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.displacement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box
      id="models"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#F8F9FA',
        position: 'relative',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="EXPLORE THE THUMP"
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
            ROYAL ENFIELD <Box component="span" sx={{ color: '#800000' }}>MOTORCYCLE LINEUP</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#475569', maxWidth: '700px', mx: 'auto', fontSize: '1.05rem' }}>
            Discover the iconic machine crafted for your riding style. Experience unmatched character, power, and thumping legacy at Bolt Motorcycles.
          </Typography>
        </Box>

        {/* Filters & Search Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            mb: 6,
            backgroundColor: '#FFFFFF',
            p: 2,
            borderRadius: 4,
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* Category Tabs */}
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#800000',
                height: 3,
                borderRadius: '3px',
              },
              '& .MuiTab-root': {
                color: '#0F172A',
                fontWeight: 700,
                '&.Mui-selected': {
                  color: '#800000',
                },
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>

          {/* Search Box */}
          <TextField
            size="small"
            placeholder="Search bike or CC..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#800000' }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 25,
                  backgroundColor: '#F8F9FA',
                  color: '#0F172A',
                  width: { xs: '100%', sm: 260 },
                  fontSize: '0.9rem',
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.12)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#800000 !important',
                  },
                },
              },
            }}
          />
        </Box>

        {/* Bike Cards Grid */}
        <Grid container spacing={4}>
          {filteredBikes.map((bike) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={bike.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    borderColor: '#800000',
                    boxShadow: '0 12px 32px rgba(128, 0, 0, 0.12)',
                  },
                  '&:hover .bike-img': {
                    transform: 'scale(1.06)',
                  },
                }}
              >
                {/* Image Container */}
                <Box sx={{ position: 'relative', overflow: 'hidden', height: 230 }}>
                  <CardMedia
                    component="img"
                    image={bike.imageUrl}
                    alt={bike.name}
                    className="bike-img"
                    sx={{
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  {/* Category Tag */}
                  <Box sx={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 1 }}>
                    <Chip
                      label={bike.category}
                      size="small"
                      sx={{
                        backgroundColor: '#F1F5F9',
                        color: '#0F172A',
                        fontWeight: 800,
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                      }}
                    />
                    {bike.featured && (
                      <Chip
                        label="POPULAR"
                        size="small"
                        sx={{
                          backgroundColor: '#800000',
                          color: '#FFFFFF',
                          fontWeight: 800,
                        }}
                      />
                    )}
                  </Box>

                  {/* Price Tag Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      left: 0,
                      p: 1.5,
                      background:
                        'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)',
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 800, color: '#800000', fontFamily: '"Outfit", sans-serif' }}
                    >
                      {bike.priceFormatted}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                    {bike.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#475569', fontWeight: 700, mb: 2, display: 'block' }}>
                    "{bike.tagline}"
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#475569', mb: 3, fontSize: '0.88rem', flexGrow: 1 }}>
                    {bike.description}
                  </Typography>

                  {/* Key Specs Pills */}
                  <Grid container spacing={1} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 6 }}>
                      <Box
                        sx={{
                          p: 1,
                          backgroundColor: '#F8F9FA',
                          borderRadius: 2,
                          border: '1px solid rgba(0, 0, 0, 0.06)',
                        }}
                      >
                        <Typography variant="caption" sx={{ color: '#475569', display: 'block' }}>
                          Engine
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 800, color: '#0F172A' }}>
                          {bike.displacement}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 6 }}>
                      <Box
                        sx={{
                          p: 1,
                          backgroundColor: '#F8F9FA',
                          borderRadius: 2,
                          border: '1px solid rgba(0, 0, 0, 0.06)',
                        }}
                      >
                        <Typography variant="caption" sx={{ color: '#475569', display: 'block' }}>
                          Power
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 800, color: '#0F172A' }}>
                          {bike.power.split('@')[0]}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Colors Swatches */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" sx={{ color: '#475569', display: 'block', mb: 1 }}>
                      Available Color Themes:
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {bike.colors.map((c, i) => (
                        <Tooltip key={i} title={c.name} arrow>
                          <Box
                            sx={{
                              width: 22,
                              height: 22,
                              borderRadius: '50%',
                              backgroundColor: c.hex,
                              border: '2px solid rgba(0, 0, 0, 0.2)',
                              cursor: 'pointer',
                              transition: 'transform 0.2s ease',
                              '&:hover': {
                                transform: 'scale(1.2)',
                                borderColor: '#800000',
                              },
                            }}
                          />
                        </Tooltip>
                      ))}
                    </Stack>
                  </Box>

                  {/* Actions */}
                  <Stack direction="row" spacing={1.5}>
                    <Button
                      variant="contained"
                      fullWidth
                      component="a"
                      href={`https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent(`Hi Bolt Motorcycles, I would like to book a test ride for ${bike.name}.`)}`}
                      target="_blank"
                      startIcon={<TwoWheelerIcon />}
                      sx={{
                        py: 1.2,
                        fontSize: '0.85rem',
                        backgroundColor: '#800000',
                        color: '#FFFFFF',
                        '&:hover': { backgroundColor: '#600000' },
                      }}
                    >
                      Book Test Ride
                    </Button>
                    <Button
                      variant="outlined"
                      component="a"
                      href={`https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent(`Hi Bolt Motorcycles, I would like to get an on-road price quote for ${bike.name}.`)}`}
                      target="_blank"
                      sx={{
                        borderColor: '#800000',
                        color: '#800000',
                        minWidth: 48,
                        px: 1.5,
                        '&:hover': { backgroundColor: 'rgba(128, 0, 0, 0.05)', borderColor: '#600000' },
                      }}
                      aria-label="Get Quote"
                    >
                      <RequestQuoteIcon fontSize="small" />
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
