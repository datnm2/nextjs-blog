import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>Datnm</title>
    </Head>
      <h1>Datnm</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}