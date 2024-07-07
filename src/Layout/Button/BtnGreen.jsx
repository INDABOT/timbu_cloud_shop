import styles from './BtnGreen.module.css'
// eslint-disable-next-line react/prop-types
const BtnGreen = ({text}) => {
  return (
    <div>
        <button className={styles.btngreen}>{text}</button>
    </div>
  )
}

export default BtnGreen