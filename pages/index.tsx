import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Stories from './stories'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Stories></Stories>
    </div>
  )
}

export default Home
