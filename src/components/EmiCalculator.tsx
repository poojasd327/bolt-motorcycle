'use client';

import React, { useState, useMemo } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Slider,
  MenuItem,
  TextField,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motorcycles } from '../data/motorcycles';
import { dealershipData } from '../data/dealershipInfo';

export default function EmiCalculator() {
  const [selectedBikeId, setSelectedBikeId] = useState<string>(motorcycles[0].id);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [tenureMonths, setTenureMonths] = useState<number>(36);
  const [interestRate, setInterestRate] = useState<number>(9.5);

  const selectedBike = useMemo(
    () => motorcycles.find((b) => b.id === selectedBikeId) || motorcycles[0],
    [selectedBikeId]
  );

  const bikePrice = selectedBike.priceStarting;
  const downPayment = Math.round((bikePrice * downPaymentPercent) / 100);
  const loanAmount = bikePrice - downPayment;

  // EMI Calculation formula
  const monthlyEmi = useMemo(() => {
    const r = interestRate / 12 / 100;
    const n = tenureMonths;
    if (loanAmount <= 0) return 0;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  }, [loanAmount, interestRate, tenureMonths]);

  const totalAmountPayable = monthlyEmi * tenureMonths + downPayment;
  const totalInterest = Math.max(0, totalAmountPayable - bikePrice);

  // Percentages for Donut chart
  const principalPercentage = Math.round((loanAmount / (loanAmount + totalInterest)) * 100) || 80;
  const interestPercentage = 100 - principalPercentage;

  return (
    <Box
      id="emi-calculator"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
        {/* Title & Section Subtitle */}
        <Box sx={{ mb: 6 }}>
          <Chip
            icon={<CalculateOutlinedIcon sx={{ color: '#000000 !important', fontSize: '1.1rem' }} />}
            label="TRANSPARENT FINANCIAL PLANNING"
            sx={{
              backgroundColor: '#F1F5F9',
              color: '#000000',
              fontWeight: 800,
              mb: 1.5,
              fontSize: '0.8rem',
              fontFamily: '"Nunito Sans", sans-serif',
              border: '1px solid #E2E8F0',
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: '#0F172A',
              fontFamily: '"Nunito Sans", sans-serif',
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.3rem' },
              mb: 1.5,
              lineHeight: 1.15,
            }}
          >
            EMI Calculator
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              fontSize: '1.05rem',
              maxWidth: '680px',
              fontFamily: '"Nunito Sans", sans-serif',
            }}
          >
            Plan your Royal Enfield purchase easily. Customize down payment, loan tenure, and interest rate to compute your estimated monthly installment.
          </Typography>
        </Box>

        <Grid container spacing={5} sx={{ alignItems: 'stretch' }}>
          {/* Left Column: Sliders & Controls */}
          <Grid size={{ xs: 12, md: 6.5, lg: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              {/* Bike Selector Dropdown */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: '#0F172A', fontWeight: 800, mb: 1, fontFamily: '"Nunito Sans", sans-serif' }}
                >
                  Select Motorcycle Model
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  value={selectedBikeId}
                  onChange={(e) => setSelectedBikeId(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#F8FAFC',
                      color: '#0F172A',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontFamily: '"Nunito Sans", sans-serif',
                      '& fieldset': { borderColor: '#E2E8F0' },
                      '&:hover fieldset': { borderColor: '#000000' },
                      '&.Mui-focused fieldset': { borderColor: '#000000' },
                    },
                  }}
                >
                  {motorcycles.map((bike) => (
                    <MenuItem
                      key={bike.id}
                      value={bike.id}
                      sx={{ fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif' }}
                    >
                      {bike.name} — ₹{bike.priceStarting.toLocaleString('en-IN')} (Ex-showroom)
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              {/* Down Payment Slider */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: '#0F172A', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Down Payment ({downPaymentPercent}%)
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: '#0F172A', fontWeight: 900, fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    ₹ {downPayment.toLocaleString('en-IN')}
                  </Typography>
                </Box>
                <Slider
                  value={downPaymentPercent}
                  onChange={(_, val) => setDownPaymentPercent(val as number)}
                  min={10}
                  max={70}
                  step={5}
                  sx={{
                    color: '#000000',
                    height: 6,
                    '& .MuiSlider-thumb': {
                      width: 20,
                      height: 20,
                      backgroundColor: '#FFFFFF',
                      border: '3px solid #000000',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: '#000000',
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#E2E8F0',
                    },
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                  <Typography variant="caption" sx={{ color: '#94A3B8', fontFamily: '"Nunito Sans", sans-serif' }}>
                    10% (₹{Math.round(bikePrice * 0.1).toLocaleString('en-IN')})
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94A3B8', fontFamily: '"Nunito Sans", sans-serif' }}>
                    70% (₹{Math.round(bikePrice * 0.7).toLocaleString('en-IN')})
                  </Typography>
                </Box>
              </Box>

              {/* Interest Rate Slider */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: '#0F172A', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Interest Rate
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: '#0F172A', fontWeight: 900, fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    {interestRate} %
                  </Typography>
                </Box>
                <Slider
                  value={interestRate}
                  onChange={(_, val) => setInterestRate(val as number)}
                  min={7.5}
                  max={14.5}
                  step={0.25}
                  sx={{
                    color: '#000000',
                    height: 6,
                    '& .MuiSlider-thumb': {
                      width: 20,
                      height: 20,
                      backgroundColor: '#FFFFFF',
                      border: '3px solid #000000',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: '#000000',
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#E2E8F0',
                    },
                  }}
                />
              </Box>

              {/* Loan Tenure Pills */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: '#0F172A', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Loan Tenure
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: '#0F172A', fontWeight: 900, fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    {tenureMonths} Months
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  {[12, 24, 36, 48, 60].map((t) => (
                    <Button
                      key={t}
                      onClick={() => setTenureMonths(t)}
                      sx={{
                        flex: 1,
                        py: 1,
                        borderRadius: '8px',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                        backgroundColor: tenureMonths === t ? '#000000' : '#F8FAFC',
                        color: tenureMonths === t ? '#FFFFFF' : '#0F172A',
                        border: '1px solid',
                        borderColor: tenureMonths === t ? '#000000' : '#E2E8F0',
                        boxShadow: 'none',
                        '&:hover': {
                          backgroundColor: tenureMonths === t ? '#262626' : '#F1F5F9',
                        },
                      }}
                    >
                      {t}M
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Split Financial Summary Card (Reference Design) */}
          <Grid size={{ xs: 12, md: 5.5, lg: 6 }}>
            <Box
              sx={{
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                height: '100%',
              }}
            >
              {/* Left Half of Card: Donut Chart & Legend */}
              <Box
                sx={{
                  backgroundColor: '#F1F5F9',
                  p: 3.5,
                  width: { xs: '100%', sm: '48%' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRight: { sm: '1px solid #E2E8F0' },
                  borderBottom: { xs: '1px solid #E2E8F0', sm: 'none' },
                }}
              >
                {/* Legend */}
                <Stack spacing={1} sx={{ width: '100%', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 12, height: 12, backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '2px' }} />
                    <Typography variant="caption" sx={{ color: '#475569', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', fontSize: '0.78rem' }}>
                      Principal Loan Amount
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {/* Subtle Red Square Accent (Mint use of red!) */}
                    <Box sx={{ width: 12, height: 12, backgroundColor: '#D32F2F', borderRadius: '2px' }} />
                    <Typography variant="caption" sx={{ color: '#475569', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', fontSize: '0.78rem' }}>
                      Interest
                    </Typography>
                  </Box>
                </Stack>

                {/* SVG Donut Chart */}
                <Box sx={{ position: 'relative', width: 150, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="150" height="150" viewBox="0 0 42 42">
                    {/* Donut background circle (Principal in White) */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.91549430918954"
                      fill="transparent"
                      stroke="#FFFFFF"
                      strokeWidth="6"
                    />
                    {/* Donut slice (Interest in Red - Mint use of red) */}
                    <circle
                      cx="21"
                      cy="21"
                      r="15.91549430918954"
                      fill="transparent"
                      stroke="#D32F2F"
                      strokeWidth="6"
                      strokeDasharray={`${interestPercentage} ${100 - interestPercentage}`}
                      strokeDashoffset="25"
                    />
                  </svg>
                  {/* Centered Donut Percentage Text */}
                  <Box sx={{ position: 'absolute', textAlign: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900, color: '#0F172A', fontFamily: '"Nunito Sans", sans-serif' }}>
                      {principalPercentage}%
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.68rem', fontFamily: '"Nunito Sans", sans-serif', display: 'block' }}>
                      Principal
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.75rem', fontFamily: '"Nunito Sans", sans-serif' }}>
                    Low ROI Finance Available
                  </Typography>
                </Box>
              </Box>

              {/* Right Half of Card: Detailed Breakdown Rows */}
              <Box
                sx={{
                  backgroundColor: '#FFFFFF',
                  p: 3.5,
                  width: { xs: '100%', sm: '52%' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Stack spacing={3} divider={<Divider sx={{ borderColor: '#F1F5F9' }} />}>
                  {/* Row 1: Loan EMI */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: '#64748B', display: 'block', fontWeight: 700, fontSize: '0.8rem', fontFamily: '"Nunito Sans", sans-serif', mb: 0.5 }}
                    >
                      Loan EMI
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 900,
                        color: '#0F172A',
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontSize: '1.8rem',
                      }}
                    >
                      ₹ {monthlyEmi.toLocaleString('en-IN')}
                    </Typography>
                  </Box>

                  {/* Row 2: Total Interest Payable */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: '#64748B', display: 'block', fontWeight: 700, fontSize: '0.8rem', fontFamily: '"Nunito Sans", sans-serif', mb: 0.5 }}
                    >
                      Total Interest Payable
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontSize: '1.4rem',
                      }}
                    >
                      ₹ {totalInterest.toLocaleString('en-IN')}
                    </Typography>
                  </Box>

                  {/* Row 3: Total Payment (Principal + Interest) */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: '#64748B', display: 'block', fontWeight: 700, fontSize: '0.8rem', fontFamily: '"Nunito Sans", sans-serif', mb: 0.5 }}
                    >
                      Total Payment (Principal + Interest)
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: '#0F172A',
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontSize: '1.4rem',
                      }}
                    >
                      ₹ {totalAmountPayable.toLocaleString('en-IN')}
                    </Typography>
                  </Box>
                </Stack>

                {/* Bottom WhatsApp Finance Button */}
                <Button
                  component="a"
                  href={`https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent(`Hi Bolt Motorcycles, I would like to apply for finance for ${selectedBike.name} (Down Payment: ₹${downPayment.toLocaleString('en-IN')}, Tenure: ${tenureMonths} months, Est. EMI: ₹${monthlyEmi.toLocaleString('en-IN')}/mo).`)}`}
                  target="_blank"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    mt: 3,
                    py: 1.4,
                    backgroundColor: '#121212',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    fontFamily: '"Nunito Sans", sans-serif',
                    borderRadius: '10px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#262626',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  Apply on WhatsApp
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
