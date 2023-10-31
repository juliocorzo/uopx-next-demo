import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { lightTheme } from '@/src/utils/styling/theme';
import createEmotionCache from '@/src/utils/styling/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type ExtendedAppProps<P = {}> = AppProps<P> & {
  emotionCache: EmotionCache;
};

export default function MyApp(props: ExtendedAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
