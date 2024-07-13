import styles from './BtnGreen.module.css'
// eslint-disable-next-line react/prop-types
const BtnGreen = ({text, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className={styles.btngreen}>{text}</button>
    </div>
  )
}

export default BtnGreen