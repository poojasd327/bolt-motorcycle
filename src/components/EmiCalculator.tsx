'use client';

import React, { useState, useMemo } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Slider,
  MenuItem,
  TextField,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motorcycles } from '../data/motorcycles';

interface EmiCalculatorProps {
  onApplyFinance: (modelName: string) => void;
}

export default function EmiCalculator({ onApplyFinance }: EmiCalculatorProps) {
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
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = tenureMonths;
    if (loanAmount <= 0) return 0;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  }, [loanAmount, interestRate, tenureMonths]);

  const totalAmountPayable = monthlyEmi * tenureMonths + downPayment;
  const totalInterest = Math.max(0, totalAmountPayable - bikePrice);

  return (
    <Box
      id="emi-calculator"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#E8E0D2',
        borderTop: '1px solid rgba(128, 0, 0, 0.15)',
        borderBottom: '1px solid rgba(128, 0, 0, 0.15)',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            icon={<CalculateIcon sx={{ color: '#800000 !important' }} />}
            label="TRANSPARENT FINANCIAL PLANNING"
            sx={{
              backgroundColor: 'rgba(128, 0, 0, 0.12)',
              color: '#800000',
              fontWeight: 800,
              mb: 2,
              letterSpacing: '0.08em',
              border: '1px solid rgba(128, 0, 0, 0.3)',
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
            ROYAL ENFIELD <Box component="span" sx={{ color: '#800000' }}>EMI CALCULATOR</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#633A2C', maxWidth: '700px', mx: 'auto', fontSize: '1.05rem' }}>
            Plan your purchase easily. Customize down payment, loan tenure, and interest rate to compute your instant estimated monthly installment.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {/* Controls Column */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                backgroundColor: '#F8F5EE',
                borderRadius: 4,
                border: '1px solid rgba(184, 132, 44, 0.3)',
                boxShadow: '0 10px 30px rgba(41, 28, 14, 0.04)',
              }}
            >
              {/* Select Bike */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ color: '#291C0E', fontWeight: 800, mb: 1.5 }}>
                  Select Royal Enfield Motorcycle
                </Typography>
                <TextField
                  select
                  fullWidth
                  value={selectedBikeId}
                  onChange={(e) => setSelectedBikeId(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#F2EDE4',
                      color: '#291C0E',
                      borderRadius: 3,
                      '& fieldset': { borderColor: 'rgba(99, 58, 44, 0.3)' },
                      '&:hover fieldset': { borderColor: '#800000' },
                    },
                  }}
                >
                  {motorcycles.map((bike) => (
                    <MenuItem key={bike.id} value={bike.id}>
                      {bike.name} — {bike.priceFormatted} (Starting)
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              {/* Down Payment Slider */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ color: '#633A2C', fontWeight: 600 }}>
                    Down Payment ({downPaymentPercent}%)
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#291C0E', fontWeight: 800 }}>
                    ₹{downPayment.toLocaleString('en-IN')}
                  </Typography>
                </Box>
                <Slider
                  value={downPaymentPercent}
                  onChange={(_, val) => setDownPaymentPercent(val as number)}
                  min={10}
                  max={70}
                  step={5}
                  sx={{
                    color: '#800000',
                    '& .MuiSlider-thumb': {
                      boxShadow: '0 0 10px rgba(128, 0, 0, 0.3)',
                    },
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="caption" sx={{ color: '#633A2C' }}>
                    Min: ₹{Math.round(bikePrice * 0.1).toLocaleString('en-IN')} (10%)
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#633A2C' }}>
                    Max: ₹{Math.round(bikePrice * 0.7).toLocaleString('en-IN')} (70%)
                  </Typography>
                </Box>
              </Box>

              {/* Loan Tenure */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography variant="body2" sx={{ color: '#633A2C', fontWeight: 600 }}>
                    Loan Tenure (Months)
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#291C0E', fontWeight: 800 }}>
                    {tenureMonths} Months ({tenureMonths / 12} Years)
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1.5}>
                  {[12, 24, 36, 48, 60].map((t) => (
                    <Button
                      key={t}
                      variant={tenureMonths === t ? 'contained' : 'outlined'}
                      onClick={() => setTenureMonths(t)}
                      sx={{
                        flex: 1,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 700,
                        backgroundColor: tenureMonths === t ? '#800000' : 'transparent',
                        borderColor: tenureMonths === t ? '#800000' : 'rgba(99, 58, 44, 0.3)',
                        color: tenureMonths === t ? '#F8F5EE' : '#291C0E',
                        '&:hover': {
                          backgroundColor: tenureMonths === t ? '#633A2C' : 'rgba(128, 0, 0, 0.08)',
                        },
                      }}
                    >
                      {t} M
                    </Button>
                  ))}
                </Stack>
              </Box>

              {/* Interest Rate */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ color: '#633A2C', fontWeight: 600 }}>
                    Interest Rate (% p.a.)
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#291C0E', fontWeight: 800 }}>
                    {interestRate}%
                  </Typography>
                </Box>
                <Slider
                  value={interestRate}
                  onChange={(_, val) => setInterestRate(val as number)}
                  min={7.5}
                  max={14.5}
                  step={0.25}
                  sx={{ color: '#800000' }}
                />
              </Box>
            </Paper>
          </Grid>

          {/* Results Summary Column */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                height: '100%',
                backgroundColor: '#F8F5EE',
                borderRadius: 4,
                border: '2px solid rgba(128, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 15px 40px rgba(41, 28, 14, 0.08)',
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <AccountBalanceWalletIcon sx={{ color: '#800000', fontSize: 28 }} />
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#291C0E' }}>
                    Calculation Breakdown
                  </Typography>
                </Box>

                {/* Big EMI Highlight */}
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: '#F2EDE4',
                    borderRadius: 3,
                    border: '1px solid rgba(128, 0, 0, 0.25)',
                    textAlign: 'center',
                    mb: 4,
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#800000', letterSpacing: '0.05em', fontWeight: 800 }}>
                    ESTIMATED MONTHLY INSTALLMENT (EMI)
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 900,
                      color: '#291C0E',
                      fontFamily: '"Outfit", sans-serif',
                      my: 1,
                    }}
                  >
                    ₹{monthlyEmi.toLocaleString('en-IN')}
                    <Typography component="span" variant="body1" sx={{ color: '#633A2C', ml: 0.5 }}>
                      / month
                    </Typography>
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#633A2C' }}>
                    *Subject to bank approval & credit evaluation.
                  </Typography>
                </Box>

                <Stack spacing={2} sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" sx={{ color: '#633A2C' }}>
                      Ex-Showroom Price:
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#291C0E' }}>
                      ₹{bikePrice.toLocaleString('en-IN')}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" sx={{ color: '#633A2C' }}>
                      Down Payment Paid:
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#15803D' }}>
                      - ₹{downPayment.toLocaleString('en-IN')}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" sx={{ color: '#633A2C' }}>
                      Loan Amount Financed:
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#291C0E' }}>
                      ₹{loanAmount.toLocaleString('en-IN')}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" sx={{ color: '#633A2C' }}>
                      Total Interest Amount:
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#800000' }}>
                      ₹{totalInterest.toLocaleString('en-IN')}
                    </Typography>
                  </Box>

                  <Divider sx={{ borderColor: 'rgba(99, 58, 44, 0.15)' }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2" sx={{ color: '#291C0E', fontWeight: 800 }}>
                      Total Cost (Principal + Interest):
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#800000' }}>
                      ₹{totalAmountPayable.toLocaleString('en-IN')}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => onApplyFinance(selectedBike.name)}
                startIcon={<CheckCircleIcon />}
                sx={{
                  py: 1.8,
                  fontSize: '1rem',
                  fontWeight: 800,
                  backgroundColor: '#800000',
                  color: '#F8F5EE',
                  '&:hover': { backgroundColor: '#633A2C' },
                }}
              >
                Apply for Low-ROI Finance
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
