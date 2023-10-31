import { createTheme } from '@mui/material/styles';
import { orange, cyan, grey, blue, lightBlue, lightGreen } from '@mui/material/colors'
import { font, monoFont, fontWeight, header } from '@/src/utils/styling/overrides';

// Theme parameters that are common to both light and dark themes
const baseTheme = {
  typography: {
    fontFamily: font.join(','),
    ...fontWeight,
    ...header,
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightGreen[500],
    },
    ternary: {
      main: cyan[500],
      dark: cyan[700],
    },
    muted: {
      main: grey[400],
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightGreen[500],
    },
    ternary: {
      main: cyan[500],
      dark: cyan[700],
    },
    muted: {
      main: grey[400],
    },
  },
});

// Add palette options here
declare module '@mui/material/styles' {
  interface Palette {
    ternary: Palette['primary'];
    muted?: Palette['primary'];
  }

  interface PaletteOptions {
    ternary?: PaletteOptions['primary'];
    muted?: PaletteOptions['primary'];
  }
}

// Add color overrides for components here
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    muted: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    muted: true;
  }
}
