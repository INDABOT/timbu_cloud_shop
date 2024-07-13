import styles from './Navbtn.module.css'
import nav1 from '../../assets/nav1.svg'
import nav2 from '../../assets/nav2.svg'
import next from '../../assets/next.svg'
const Navbtn = () => {
  return (
    <div className={styles.navBox}>
        <div className={styles.nav1}><img src={nav1} alt="" /><span>1</span></div>
        <div className={styles.nav1}><img src={nav2} alt="" /><span className={styles.sp2}>2</span></div>
        <div className={styles.nav1}><img src={nav2} alt="" /><span className={styles.sp2}>3</span></div>

        <div className={styles.nav1}><img src={next} alt="" /></div>
    </div>
  )
}

export default Navbtn