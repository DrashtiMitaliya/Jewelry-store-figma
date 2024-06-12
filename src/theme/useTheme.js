'use client'
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
      fontFamily: 'Martel', // Default font
      h1: {
        fontFamily: 'Roboto, sans-serif', // Font for h1
      },
      h2: {
        fontFamily: 'Open Sans',
      },
      h3: {
        fontFamily: 'Lora'
      },
      
    },
  });