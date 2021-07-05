import Link from 'next/link'
import Layout from '../components/Layout'
const About = () => {
  return (
    <Layout title="About DJ events">
      <h1>About</h1>
      <p>This is an app to find the latest musical events</p>
      <p>version 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  )
}

export default About
