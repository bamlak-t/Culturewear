import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <CssBaseline />
    <Component {...pageProps} />
  </>


}

export default MyApp
