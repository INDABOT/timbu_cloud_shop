import BtnGreen from "../../Layout/Button/BtnGreen";
import styles from "./ThirdSection.module.css";
import spoon from "../../assets/spoon.svg";
const ThirdSection = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.textArea}>
        <div className={styles.textBox}>
          <h4>Cleansing Tea</h4>
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
        <img className={styles.tea} src={spoon} alt="" />
      </div>
    </div>
  );
};

export default ThirdSection;
