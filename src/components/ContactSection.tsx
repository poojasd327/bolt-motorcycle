'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Stack,
  Chip,
  Alert,
  MenuItem,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { dealershipData } from '../data/dealershipInfo';
import { motorcycles } from '../data/motorcycles';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interestedBike, setInterestedBike] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#E8E0D2',
        position: 'relative',
        borderTop: '1px solid rgba(128, 0, 0, 0.15)',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            icon={<PhoneIcon sx={{ color: '#800000 !important' }} />}
            label="WE ARE HERE TO HELP"
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
            CONNECT WITH <Box component="span" sx={{ color: '#800000' }}>BOLT MOTORCYCLES</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#633A2C', maxWidth: '700px', mx: 'auto', fontSize: '1.05rem' }}>
            Have questions about buying a Royal Enfield, booking a service appointment, or pricing? Reach out to our team directly.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Dealership Info Card */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                height: '100%',
                backgroundColor: '#F8F5EE',
                borderRadius: 4,
                border: '1px solid rgba(184, 132, 44, 0.3)',
                boxShadow: '0 10px 30px rgba(41, 28, 14, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#291C0E', mb: 1 }}>
                  Bolt Motorcycles Dealership
                </Typography>
                <Typography variant="body2" sx={{ color: '#800000', fontWeight: 700, mb: 4 }}>
                  Authorised Royal Enfield Sales, Service & Spares
                </Typography>

                <Stack spacing={3.5} sx={{ mb: 4 }}>
                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(128, 0, 0, 0.1)',
                        border: '1px solid rgba(128, 0, 0, 0.25)',
                      }}
                    >
                      <PhoneIcon sx={{ color: '#800000' }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#633A2C', display: 'block' }}>
                        Call Showroom / Service Hotline
                      </Typography>
                      <Typography
                        variant="h6"
                        component="a"
                        href={`tel:${dealershipData.phoneRaw}`}
                        sx={{
                          color: '#291C0E',
                          fontWeight: 800,
                          textDecoration: 'none',
                          '&:hover': { color: '#800000' },
                        }}
                      >
                        {dealershipData.phone}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(128, 0, 0, 0.1)',
                        border: '1px solid rgba(128, 0, 0, 0.25)',
                      }}
                    >
                      <EmailIcon sx={{ color: '#800000' }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#633A2C', display: 'block' }}>
                        Official Email
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="a"
                        href={`mailto:${dealershipData.email}`}
                        sx={{
                          color: '#291C0E',
                          fontWeight: 700,
                          textDecoration: 'none',
                          '&:hover': { color: '#800000' },
                        }}
                      >
                        {dealershipData.email}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Business Hours */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(128, 0, 0, 0.1)',
                        border: '1px solid rgba(128, 0, 0, 0.25)',
                      }}
                    >
                      <AccessTimeIcon sx={{ color: '#800000' }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#633A2C', display: 'block' }}>
                        Showroom & Workshop Timings
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#291C0E', fontWeight: 600 }}>
                        {dealershipData.businessHours.weekdays}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#633A2C' }}>
                        {dealershipData.businessHours.sunday}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Address */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(128, 0, 0, 0.1)',
                        border: '1px solid rgba(128, 0, 0, 0.25)',
                      }}
                    >
                      <LocationOnIcon sx={{ color: '#800000' }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#633A2C', display: 'block' }}>
                        Showroom Location
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#291C0E', fontWeight: 600 }}>
                        {dealershipData.address.street}, {dealershipData.address.city}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#633A2C' }}>
                        {dealershipData.address.landmark} • {dealershipData.address.pincode}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>

              {/* Direct WhatsApp Action */}
              <Button
                variant="contained"
                fullWidth
                component="a"
                href={`https://wa.me/${dealershipData.whatsapp}?text=Hi%20Bolt%20Motorcycles,%20I%20would%20like%20to%20enquire%20about%20Royal%20Enfield%20bikes.`}
                target="_blank"
                startIcon={<WhatsAppIcon />}
                sx={{
                  py: 1.6,
                  backgroundColor: '#25D366',
                  color: '#F8F5EE',
                  fontWeight: 800,
                  '&:hover': { backgroundColor: '#1EBE5D' },
                }}
              >
                Chat on WhatsApp Now
              </Button>
            </Paper>
          </Grid>

          {/* Enquiry Form */}
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
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#291C0E', mb: 1 }}>
                Send Us a Message
              </Typography>
              <Typography variant="body2" sx={{ color: '#633A2C', mb: 4 }}>
                Fill out the form below and our customer relationship team will reach out within 2 hours.
              </Typography>

              {sent ? (
                <Alert
                  icon={<CheckCircleIcon fontSize="inherit" sx={{ color: '#15803D' }} />}
                  severity="success"
                  sx={{ p: 3, borderRadius: 3, backgroundColor: 'rgba(21, 128, 61, 0.1)', color: '#291C0E' }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, color: '#291C0E' }}>
                    Message Received!
                  </Typography>
                  <Typography variant="body2">
                    Thank you, {name}! Our team at Bolt Motorcycles will call you at +91 {phone} shortly.
                  </Typography>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Your Name"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Phone Number"
                        fullWidth
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        slotProps={{
                          input: {
                            startAdornment: <Typography sx={{ color: '#800000', mr: 1, fontWeight: 700 }}>+91</Typography>,
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Email Address"
                        fullWidth
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        select
                        label="Interested Motorcycle / Service"
                        fullWidth
                        value={interestedBike}
                        onChange={(e) => setInterestedBike(e.target.value)}
                      >
                        <MenuItem value="General Enquiry">General Enquiry</MenuItem>
                        {motorcycles.map((m) => (
                          <MenuItem key={m.id} value={m.name}>
                            {m.name}
                          </MenuItem>
                        ))}
                        <MenuItem value="Authorised Service">Authorised Service & Repairs</MenuItem>
                        <MenuItem value="Exchange / Trade-in">Bike Exchange / Trade-in</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Your Message or Special Request"
                        fullWidth
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mention any specific color preference, test ride date, or questions..."
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 4 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      startIcon={<SendIcon />}
                      sx={{
                        px: 5,
                        py: 1.8,
                        fontSize: '1rem',
                        fontWeight: 800,
                        backgroundColor: '#800000',
                        color: '#F8F5EE',
                        '&:hover': { backgroundColor: '#633A2C' },
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Enquiry'}
                    </Button>
                  </Box>
                </form>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
