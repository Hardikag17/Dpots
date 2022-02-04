import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId='Y4lPwivW8SJrPZKWvj0FdgLj0sf3liKn0uatoS1d'
      serverUrl='https://u3wapghe3k4w.usemoralis.com:2053/server'>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
