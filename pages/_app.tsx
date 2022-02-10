import { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '../redux/store'

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase.config';
import AppLayout from '../components/Layout/AppLayout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Router from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  initializeApp(firebaseConfig);

  useEffect(() => {
    // TODO 화면 전환 부드럽게 처리하기
    onAuthStateChanged(getAuth(), (user) => !user ? Router.push('/login') : Router.push('/main'));
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content='width=device-width, initial-scale=1' />
        <title>Ani Diary</title>
      </Head>

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>


    </>
  )
}

export default wrapper.withRedux(MyApp);
