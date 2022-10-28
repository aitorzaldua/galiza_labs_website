import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Draft Digital</title>
        <meta name="description" content="Draft Digital Website" />
        <link rel="icon" href="/logDD.svg" />
      </Head>

      <h1 className="text-3xl font-bold underline text-red-600">
      Hello world!
    </h1>
    </div>
  )
}