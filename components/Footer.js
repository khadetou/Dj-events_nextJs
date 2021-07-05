import Styles from '../styles/style.module.scss'
import Link from 'next/link'
const Footer = () => {
  const { footer } = Styles
  return (
    <footer className={footer}>
      <p>Copyrigth © Dj Events 2021</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  )
}

export default Footer
