import Head from 'next/head'
import Styles from '../styles/style.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Layout = ({ children, title, keywords, description }) => {
  const { container } = Styles
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Dj Events | find the hottest parties',
  description: 'Find the latest and other musical events',
  keywords: 'music, dj, edm, events',
}

export default Layout
