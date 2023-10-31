import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { darkTheme, lightTheme } from '../src/utils/styling/theme';

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];
