import { AppProps } from 'next/app';
import Head from 'next/head';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase.config';
import AppLayout from '../components/Layout/AppLayout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import '../styles/global.css'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  initializeApp(firebaseConfig);

  useEffect(() => {
    router.push('/splash');

    // TODO 화면 전환 부드럽게 처리하기 -> Local Storage로 변경/활용.
    onAuthStateChanged(getAuth(), (user) => !user ? router.push('/login') : '');
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

export default MyApp;
