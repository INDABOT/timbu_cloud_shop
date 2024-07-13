import styles from "./Footer.module.css";
import footerLogo from "../../assets/Logo.svg";
import arrow from "../../assets/arrow-up-right.svg";
import Button from "../Button/Button";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.textArea}>
        <div className={styles.footerLogo}>
          <div className={styles.imgContainer}>
            <img src={footerLogo} alt="" />
          </div>
          <div className={styles.footerText}>
            <p>
              Each sip of our perfectly blended tea offers a harmonious balance
              of organic ingredients, promoting relaxation, vitality and overall
              wellness.{" "}
            </p>
            <p className={styles.shop}>
              Shop here <img src={arrow} alt="" />
            </p>
          </div>
        </div>
        <div className={styles.navF}>
          <div className={styles.sitemapHome}>
            <h6>Sitemap</h6>
            <a href="">Home</a>
            <a href="">Products</a>
          </div>
          <div className={styles.sitemapSocial}>
            <h6>Socials</h6>
            <a href="">Facebook</a>
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </div>
          <div className={styles.sitemapReturn}>
            <h6>Info</h6>
            <a href="">Return policy</a>
            <a href="">Legal notice</a>
            <a href="">Cookie policy</a>
            <a href="">Terms and conditions</a>
          </div>
        </div>
      </div>

      <div className={styles.subscribe}>
        <label htmlFor="">
          <div className={styles.btnC}>
            {" "}
            <Button className={styles.btnC} text="Subscribe" />
          </div>
          <input
            className={styles.subInput}
            type="text"
            placeholder="Email Address"
            id=""
          />
        </label>
      </div>

      <div className={styles.copyright}>
        <p>Copyright 2024. Florence</p>
      </div>
    </div>
  );
};

export default Footer;
