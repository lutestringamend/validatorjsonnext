import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gnosis Validator Pools API</title>
        <meta name="description" content="Gnosis Validator Pools API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gnosis Validator Pools API v1
        </h1>

        <p className={styles.description}>
          Get Entity by querying validator public key. 
        </p>
      </main>

    </div>
  )
}
