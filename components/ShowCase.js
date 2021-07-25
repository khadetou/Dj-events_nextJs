import Styles from '@/styles/style.module.scss'

const ShowCase = () => {
  const { showcase } = Styles
  return (
    <div className={showcase}>
      <h1>Welcome to the party</h1>
      <h2>Find the hottest Dj events</h2>
    </div>
  )
}

export default ShowCase
