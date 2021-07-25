import Layout from '@/components/Layout'
import Styles from '@/styles/style.module.scss'
import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'
const NotFoundPage = () => {
  const { error, error__h1 } = Styles
  return (
    <Layout title="Page Not Found">
      <div className={error}>
        <h1 className={error__h1}>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>There is nothing here</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
