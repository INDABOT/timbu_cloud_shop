import heart from '../../assets/heart.svg'
import heart2 from '../../assets/heart 2.svg'
import styles from './Heart.module.css'

const Heart = () => {
  return (
    <div className={styles.hrt}>
        <img src={heart} alt="" />
        <img className={styles.h2} src={heart2} alt="" />
    </div>
  )
}

export default Heart