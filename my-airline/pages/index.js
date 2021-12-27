import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Airline App</title>
        <meta name="description" content="Ejemplo para truehome" />
      </Head>
    </div>
  )
}
