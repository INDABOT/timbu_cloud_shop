import styles from "./DisplayHero.module.css";
import D1 from "../../assets/D1.png";
import Counter from "../../Layout/Counter/Counter";
import Accordion from "../../Layout/Accordion/Accordion";
const DisplayHero = () => {
  return (
    <div className={styles.display}>
      <div className={styles.img_Box}>
        <img src={D1} alt="" />
      </div>
      <div className={styles.info_Box}>
        <div className={styles.info_head}>
          <h4 className={styles.h4}>Blossom Harmony Tea</h4>
          <span>₦3500</span>
        </div>
        <p className={styles.Dinfo}>
          Our Specially crafted slimming herbal tea blends are designed to
          support women’s health and well-being. Each sip offers an harmonious
          perfect blend of organic ingredients, promoting relaxation, vitality,
          and overall wellness.
        </p>
        <ul className={styles.D_ul}>
          <li>Detoxifies and cleanses the liver</li>
          <li>Replenishes the body’s vitality</li>
          <li>Replenishes the body’s vitality</li>
          <li>Balances the hormones</li>
        </ul>
        <div className={styles.buyContainer}>
          <Counter />

          <div className={styles.buyButton}>
            <a href="/shopping">Buy Now</a>
          </div>
        </div>

        <div className={styles.directions}>
          <div className={styles.Accordion}>
          <Accordion />

          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayHero;
