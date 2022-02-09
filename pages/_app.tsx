import { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content='width=device-width, initial-scale=1' />
        <title>Ani Diary</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp);
