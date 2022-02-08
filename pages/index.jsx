import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'

export default function Home() {
  const value = useSelector(({counter}) => counter.value)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="반려동물 다이어리" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/counter">to COUNTER</Link>
      <h1>{ value }</h1>
    </div>
  )
}
