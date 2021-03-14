import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

const app: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header></Header>
    
  </div>
)

export default app
