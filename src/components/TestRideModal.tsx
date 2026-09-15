'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Grid,
  Alert,
  Chip,
  Stack,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import confetti from 'canvas-confetti';
import { motorcycles } from '../data/motorcycles';

interface TestRideModalProps {
  open: boolean;
  onClose: () => void;
  initialModel?: string;
  initialTab?: 'test-ride' | 'quote' | 'service';
}

export default function TestRideModal({
  open,
  onClose,
  initialModel = '',
  initialTab = 'test-ride',
}: TestRideModalProps) {
  const [activeTab, setActiveTab] = useState<'test-ride' | 'quote' | 'service'>(initialTab);
  const [selectedModel, setSelectedModel] = useState<string>(initialModel || motorcycles[0].name);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialModel) {
      setSelectedModel(initialModel);
    }
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialModel, initialTab, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#800000', '#633A2C', '#B8842C'],
      });
    }, 1000);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleResetAndClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#F2EDE4',
            backgroundImage: 'none',
            borderRadius: 4,
            border: '1px solid rgba(128, 0, 0, 0.3)',
            boxShadow: '0 25px 60px rgba(41, 28, 14, 0.2)',
            color: '#291C0E',
          },
        },
      }}
    >
      {/* Header */}
      <DialogTitle sx={{ p: 3, pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,
              backgroundColor: 'rgba(128, 0, 0, 0.1)',
              border: '1px solid #800000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TwoWheelerIcon sx={{ color: '#800000' }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#291C0E' }}>
              {activeTab === 'test-ride'
                ? 'Book a Royal Enfield Test Ride'
                : activeTab === 'quote'
                ? 'Request On-Road Price Quote'
                : 'Schedule Authorised Service'}
            </Typography>
            <Typography variant="caption" sx={{ color: '#800000', fontWeight: 800 }}>
              Bolt Motorcycles • Authorised RE Dealership
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={handleResetAndClose} sx={{ color: '#291C0E' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircleIcon sx={{ color: '#15803D', fontSize: 72, mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#291C0E', mb: 1, fontFamily: '"Outfit", sans-serif' }}>
              Booking Confirmed!
            </Typography>
            <Typography variant="body1" sx={{ color: '#633A2C', mb: 3 }}>
              Thank you, <strong style={{ color: '#291C0E' }}>{name}</strong>! Our Bolt Motorcycles RE specialist will contact you shortly at <strong style={{ color: '#800000' }}>+91 {phone}</strong> to confirm your slot.
            </Typography>

            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                backgroundColor: '#F8F5EE',
                border: '1px solid rgba(128, 0, 0, 0.25)',
                borderRadius: 3,
                textAlign: 'left',
                mb: 4,
              }}
            >
              <Typography variant="subtitle2" sx={{ color: '#800000', fontWeight: 800, mb: 1 }}>
                Booking Summary:
              </Typography>
              <Typography variant="body2" sx={{ color: '#291C0E' }}>
                • <strong>Model:</strong> {selectedModel}
              </Typography>
              <Typography variant="body2" sx={{ color: '#291C0E' }}>
                • <strong>Preferred Slot:</strong> {preferredDate || 'Earliest Available'} at {preferredTime}
              </Typography>
              <Typography variant="body2" sx={{ color: '#291C0E' }}>
                • <strong>Location:</strong> Bolt Motorcycles Dealership
              </Typography>
            </Paper>

            <Button
              variant="contained"
              onClick={handleResetAndClose}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 800,
                backgroundColor: '#800000',
                color: '#F8F5EE',
              }}
            >
              Done
            </Button>
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <Alert severity="error" sx={{ mb: 2.5, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            <Stack spacing={2.5}>
              {/* Type selector chips */}
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Test Ride"
                  onClick={() => setActiveTab('test-ride')}
                  sx={{
                    fontWeight: 800,
                    px: 1,
                    backgroundColor: activeTab === 'test-ride' ? '#800000' : '#F8F5EE',
                    color: activeTab === 'test-ride' ? '#F8F5EE' : '#291C0E',
                    border: '1px solid #800000',
                  }}
                />
                <Chip
                  label="Price Quote"
                  onClick={() => setActiveTab('quote')}
                  sx={{
                    fontWeight: 800,
                    px: 1,
                    backgroundColor: activeTab === 'quote' ? '#800000' : '#F8F5EE',
                    color: activeTab === 'quote' ? '#F8F5EE' : '#291C0E',
                    border: '1px solid #800000',
                  }}
                />
                <Chip
                  label="Service Booking"
                  onClick={() => setActiveTab('service')}
                  sx={{
                    fontWeight: 800,
                    px: 1,
                    backgroundColor: activeTab === 'service' ? '#800000' : '#F8F5EE',
                    color: activeTab === 'service' ? '#F8F5EE' : '#291C0E',
                    border: '1px solid #800000',
                  }}
                />
              </Stack>

              {/* Model selection */}
              <TextField
                select
                label="Select Motorcycle Model"
                fullWidth
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                {motorcycles.map((m) => (
                  <MenuItem key={m.id} value={m.name}>
                    {m.name} ({m.displacement}) — {m.priceFormatted}
                  </MenuItem>
                ))}
              </TextField>

              {/* Customer Name */}
              <TextField
                label="Full Name"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />

              {/* Contact Phone & Email */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile"
                    slotProps={{
                      input: {
                        startAdornment: <Typography sx={{ color: '#800000', mr: 1, fontWeight: 700 }}>+91</Typography>,
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Email Address (Optional)"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                  />
                </Grid>
              </Grid>

              {/* Date & Time Slot */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Preferred Date"
                    type="date"
                    fullWidth
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    slotProps={{
                      inputLabel: { shrink: true },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    label="Time Slot"
                    fullWidth
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                  >
                    {['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:30 PM'].map((t) => (
                      <MenuItem key={t} value={t}>
                        {t}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Stack>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button onClick={handleResetAndClose} sx={{ color: '#633A2C' }}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  px: 4,
                  py: 1.2,
                  fontWeight: 800,
                  backgroundColor: '#800000',
                  color: '#F8F5EE',
                  '&:hover': { backgroundColor: '#633A2C' },
                }}
              >
                {loading ? 'Submitting...' : 'Confirm Request'}
              </Button>
            </Box>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
