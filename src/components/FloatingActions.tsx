'use client';

import React from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { dealershipData } from '../data/dealershipInfo';

interface FloatingActionsProps {
  onOpenTestRide: () => void;
}

export default function FloatingActions({ onOpenTestRide }: FloatingActionsProps) {
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
      <Tooltip title="Book a Test Ride" placement="left" arrow>
        <Fab
          variant="extended"
          onClick={onOpenTestRide}
          sx={{
            fontWeight: 800,
            px: 2.5,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
            backgroundColor: '#800000',
            color: '#E0D6B8',
            border: '1px solid #B8842C',
            '&:hover': {
              backgroundColor: '#633A2C',
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
            color: '#E0D6B8',
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
