import styles from "./SecondSection.module.css";
import bottle from "../../assets/bottle.svg";
import BtnGreen from "../../Layout/Button/BtnGreen";
const SecondSection = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.textArea}>
        <div className={styles.textBox}>
          <h4>Slimming Tea</h4>
          <p>
            Our Specially crafted slimming herbal tea blends are designed to
            support women’s health and well-being.
          </p>
          <div className={styles.btnHero}>
            <BtnGreen text="Buy Now" />
          </div>
        </div>
      </div>
      <div className={styles.imgArea}>
        <img className={styles.tea} src={bottle} alt="" />
      </div>
    </div>
  );
};

export default SecondSection;
