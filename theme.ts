'use client';
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFDB63',
      contrastText: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
    },
    background: {
      paper: 'transparent',
    },
  },
  components: {
    // Override OutlinedInput directly, so hover/focus works everywhere
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '& fieldset': {
            borderColor: 'rgba(255,255,255,0.2)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255,219,99,0.3)',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FFDB63',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(255,255,255,0.6)',
          '&.Mui-focused': {
            color: '#FFDB63',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined', // ensure all TextFields use outlined
      },
      styleOverrides: {
        root: {
          '& .MuiFormHelperText-root': {
            color: '#f87171',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,255,255,0.2)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,219,99,0.6)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFDB63',
          },
          '& .MuiSvgIcon-root': {
            color: 'rgba(255,255,255,0.6)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          backgroundImage: 'none',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-selected': {
            backgroundColor: 'rgba(255,219,99,0.15)',
          },
          '&.Mui-selected:hover': {
            backgroundColor: 'rgba(255,219,99,0.25)',
          },
          '&:hover': {
            backgroundColor: 'rgba(255,219,99,0.1)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#FFDB63',
          color: '#000000',
          fontWeight: 700,
          '&:hover': {
            backgroundColor: '#f5ce45',
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-selected': {
            backgroundColor: '#FFDB63',
            color: '#000000',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#f5ce45',
          },
        },
      },
    },
    MuiClock: { styleOverrides: { pin: { backgroundColor: '#FFDB63' } } },
    MuiClockPointer: {
      styleOverrides: {
        root: { backgroundColor: '#FFDB63' },
        thumb: { backgroundColor: '#FFDB63', borderColor: '#FFDB63' },
      },
    },
    MuiPickersToolbar: { styleOverrides: { root: { color: '#ffffff' } } },
    MuiDateCalendar: { styleOverrides: { root: { color: '#ffffff', backgroundColor: '#1a1a1a' } } },
    MuiTimeClock: { styleOverrides: { root: { color: '#ffffff', backgroundColor: '#1a1a1a' } } },
    MuiDialogActions: { styleOverrides: { root: { backgroundColor: '#1a1a1a' } } },
    MuiMultiSectionDigitalClock: { styleOverrides: { root: { color: '#ffffff', backgroundColor: '#1a1a1a' } } },
    MuiMultiSectionDigitalClockSection: {
      styleOverrides: {
        item: {
          color: '#ffffff',
          '&.Mui-selected': {
            backgroundColor: '#FFDB63',
            color: '#000000',
          },
        },
      },
    },
    MuiPickersCalendarHeader: { styleOverrides: { root: { color: '#ffffff' }, label: { color: '#ffffff' } } },
    MuiDayCalendar: { styleOverrides: { weekDayLabel: { color: 'rgba(255,255,255,0.5)' } } },
    MuiPickerPopper: { styleOverrides: { paper: { backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' } } },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'rgba(255,255,255,0.6)',
          '&:hover': { color: '#FFDB63' },
        },
      },
    },
  },
});

export default theme;