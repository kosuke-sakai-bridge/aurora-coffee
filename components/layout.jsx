import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" contents="Tutorial" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}