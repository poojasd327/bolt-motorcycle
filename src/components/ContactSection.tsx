'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Alert,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { dealershipData } from '../data/dealershipInfo';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
        py: { xs: 8, md: 14 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Nunito Sans", sans-serif',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 }, mx: 'auto' }}>
        <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: 'stretch' }}>
          {/* Left Side: Clean Minimalist Contact Form */}
          <Grid size={{ xs: 12, md: 6.5, lg: 6 }}>
            <Box sx={{ pr: { md: 4 } }}>
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
                Contact Us
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#64748B',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  fontFamily: '"Nunito Sans", sans-serif',
                  mb: 5,
                }}
              >
                Feel free to contact us any time. We will get back to you as soon as we can!
              </Typography>

              {sent ? (
                <Alert
                  icon={<CheckCircleIcon fontSize="inherit" sx={{ color: '#000000' }} />}
                  severity="success"
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: '#F4F4F6',
                    color: '#0F172A',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, mb: 0.5, color: '#0F172A', fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    Message Received!
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: '"Nunito Sans", sans-serif' }}>
                    Thank you, {name}! Our team at Bolt Motorcycles will call you at +91 {phone} shortly.
                  </Typography>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3.5}>
                    <TextField
                      variant="standard"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      slotProps={{
                        input: {
                          disableUnderline: false,
                          sx: {
                            fontSize: '1rem',
                            fontFamily: '"Nunito Sans", sans-serif',
                            py: 1,
                            color: '#0F172A',
                            '&:before': { borderColor: '#E2E8F0' },
                            '&:after': { borderColor: '#D32F2F' },
                          },
                        },
                      }}
                    />

                    <TextField
                      variant="standard"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      slotProps={{
                        input: {
                          disableUnderline: false,
                          sx: {
                            fontSize: '1rem',
                            fontFamily: '"Nunito Sans", sans-serif',
                            py: 1,
                            color: '#0F172A',
                            '&:before': { borderColor: '#E2E8F0' },
                            '&:after': { borderColor: '#D32F2F' },
                          },
                        },
                      }}
                    />

                    <TextField
                      variant="standard"
                      placeholder="Phone Number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      slotProps={{
                        input: {
                          disableUnderline: false,
                          sx: {
                            fontSize: '1rem',
                            fontFamily: '"Nunito Sans", sans-serif',
                            py: 1,
                            color: '#0F172A',
                            '&:before': { borderColor: '#E2E8F0' },
                            '&:after': { borderColor: '#D32F2F' },
                          },
                        },
                      }}
                    />

                    <TextField
                      variant="standard"
                      placeholder="Message"
                      multiline
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      slotProps={{
                        input: {
                          disableUnderline: false,
                          sx: {
                            fontSize: '1rem',
                            fontFamily: '"Nunito Sans", sans-serif',
                            py: 1,
                            color: '#0F172A',
                            '&:before': { borderColor: '#E2E8F0' },
                            '&:after': { borderColor: '#D32F2F' },
                          },
                        },
                      }}
                    />

                    <Box sx={{ pt: 2 }}>
                      <Button
                        type="submit"
                        disabled={loading}
                        sx={{
                          backgroundColor: '#121212',
                          color: '#FFFFFF',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          fontFamily: '"Nunito Sans", sans-serif',
                          letterSpacing: '0.12em',
                          px: 6,
                          py: 1.6,
                          borderRadius: '4px',
                          boxShadow: 'none',
                          '&:hover': {
                            backgroundColor: '#262626',
                            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
                          },
                        }}
                      >
                        {loading ? 'SENDING...' : 'SEND'}
                      </Button>
                    </Box>
                  </Stack>
                </form>
              )}
            </Box>
          </Grid>

          {/* Right Side: Overlapping Dark Info Card with Red Geometry Accent */}
          <Grid size={{ xs: 12, md: 5.5, lg: 6 }}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                minHeight: '440px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Red Geometry Accent Block - Top Right */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '35%',
                  height: '40%',
                  backgroundColor: '#D32F2F', // Red accent replacing yellow
                  zIndex: 1,
                }}
              />

              {/* Red Geometry Accent Block - Bottom Right */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '35%',
                  height: '35%',
                  backgroundColor: '#D32F2F', // Red accent replacing yellow
                  zIndex: 1,
                }}
              />

              {/* Small Red Square Accent - Top Left of Info Card */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 10, md: 24 },
                  left: { xs: -10, md: -20 },
                  width: 32,
                  height: 32,
                  backgroundColor: '#D32F2F', // Red accent replacing yellow
                  zIndex: 3,
                }}
              />

              {/* Dark Info Card */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: '#18181A',
                  color: '#FFFFFF',
                  width: '100%',
                  mr: { md: 4 },
                  p: { xs: 4, sm: 6 },
                  borderRadius: '4px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontFamily: '"Nunito Sans", sans-serif',
                    fontSize: '2.2rem',
                    mb: 4,
                  }}
                >
                  Info
                </Typography>

                <Stack spacing={3.5}>
                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <EmailOutlinedIcon sx={{ color: '#FFFFFF', fontSize: 28 }} />
                    <Typography
                      component="a"
                      href={`mailto:${dealershipData.email}`}
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                        textDecoration: 'none',
                        '&:hover': { color: '#E4E4E7', textDecoration: 'underline' },
                      }}
                    >
                      {dealershipData.email}
                    </Typography>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <PhoneOutlinedIcon sx={{ color: '#FFFFFF', fontSize: 28 }} />
                    <Typography
                      component="a"
                      href={`tel:${dealershipData.phoneRaw}`}
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                        textDecoration: 'none',
                        '&:hover': { color: '#E4E4E7', textDecoration: 'underline' },
                      }}
                    >
                      {dealershipData.phone}
                    </Typography>
                  </Box>

                  {/* Address */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                    <LocationOnOutlinedIcon sx={{ color: '#FFFFFF', fontSize: 28, mt: 0.3 }} />
                    <Typography
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '1rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                        lineHeight: 1.5,
                      }}
                    >
                      {dealershipData.address.street}, {dealershipData.address.city}, {dealershipData.address.pincode}
                    </Typography>
                  </Box>

                  {/* Business Hours */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <AccessTimeOutlinedIcon sx={{ color: '#FFFFFF', fontSize: 28 }} />
                    <Typography
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '1rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                      }}
                    >
                      {dealershipData.businessHours.weekdays}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
