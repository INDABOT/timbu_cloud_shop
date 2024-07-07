import styles from "./Footer.module.css";
import footerLogo from "../../assets/Logo.svg";
import arrow from '../../assets/arrow-up-right.svg'
import Button from "../Button/Button";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.textArea}>
        <div className={styles.footerLogo}>
          <div className={styles.imgContainer}><img src={footerLogo} alt="" /></div>
          <div className={styles.footerText}>
          <p>
            Each sip of our perfectly blended tea offers a harmonious balance of
            organic ingredients, promoting relaxation, vitality and overall
            wellness.{" "}
          </p>
          <p className={styles.shop}>Shop here <img src={arrow} alt="" /></p>
          </div>
        </div>
        <div className={styles.navF}>
            <ul className={styles.f_ul}>
                <li>Sitemap</li>
                <li>Home</li>
                <li>Products</li>
                <li>Contact us</li>
                <li>FAQs</li>
            </ul>
            <ul className={styles.f_ul} >
                <li>Socials</li>
                <li>Facebook</li>
                <li>LinkdIn</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
            <ul className={styles.f_ul}>
                <li>Info</li>
                <li>Return Policy</li>
                <li>Legal notice</li>
                <li>Cookie Policy</li>
                <li>Terms and conditions</li>
            </ul>
        </div>
      </div>

      <div className={styles.subscribe}>
       <label htmlFor=""><Button text="Subscribe" />
        <input className={styles.subInput} type="text" placeholder="Email Address" id="" />
       </label>
      </div>

      <div className={styles.copyright}>
        <p >Copyright 2024. Florence</p>

      </div>
    </div>
  );
};

export default Footer;
