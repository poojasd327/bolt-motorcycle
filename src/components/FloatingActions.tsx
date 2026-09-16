'use client';

import React from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { dealershipData } from '../data/dealershipInfo';

export default function FloatingActions() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'flex-end',
      }}
    >
      {/* Test Ride Floating Action */}
      <Tooltip title="Book a Test Ride on WhatsApp" placement="left" arrow>
        <Fab
          variant="extended"
          component="a"
          href={`https://wa.me/${dealershipData.whatsapp}?text=${encodeURIComponent('Hi Bolt Motorcycles, I would like to book a test ride for a Royal Enfield bike.')}`}
          target="_blank"
          sx={{
            fontWeight: 800,
            px: 2.5,
            boxShadow: '0 8px 25px rgba(211, 47, 47, 0.35)',
            background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
            color: '#FFFFFF',
            '&:hover': {
              background: 'linear-gradient(135deg, #B71C1C 0%, #8E0000 100%)',
              transform: 'scale(1.05)',
            },
          }}
        >
          <TwoWheelerIcon sx={{ mr: 1 }} />
          Test Ride
        </Fab>
      </Tooltip>

      {/* WhatsApp Chat Floating Action */}
      <Tooltip title="Chat on WhatsApp" placement="left" arrow>
        <Fab
          component="a"
          href={`https://wa.me/${dealershipData.whatsapp}?text=Hi%20Bolt%20Motorcycles,%20I%20want%20to%20know%20more%20about%20Royal%20Enfield%20bikes.`}
          target="_blank"
          sx={{
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
            '&:hover': {
              backgroundColor: '#1EBE5D',
              transform: 'scale(1.08)',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Fab>
      </Tooltip>
    </Box>
  );
}
