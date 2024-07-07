import styles from "./Hero.module.css";
import teaImg from "../../assets/Tea.svg";
import Button from "../../Layout/Button/Button";
const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.textArea}>
        <div className={styles.textBox}>
          <h1>Women’s Herbal Tea</h1>
          <p>
            Nurture your wellness with our Women’s Herbal Tea. Discover the
            perfect blend of nature’s finest herbs at Herbetea
          </p>
          <div className={styles.btnHero}><Button text="Explore Products" /></div>
        </div>
      </div>
      <div className={styles.imgArea}>
        <img className={styles.tea} src={teaImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
