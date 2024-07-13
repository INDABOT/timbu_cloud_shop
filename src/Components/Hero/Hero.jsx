import styles from "./Hero.module.css";
import teaImg from "../../assets/testing.jpeg";
import Button from "../../Layout/Button/Button";
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/products');
};
  return (
    <div className={styles.Hero}>
      <div className={styles.textArea}>
        <div className={styles.textBox}>
          <h1>Women’s Herbal Tea</h1>
          <p>
            Nurture your wellness with our Women’s Herbal Tea. Discover the
            perfect blend of nature’s finest herbs at Herbetea
          </p>
          <div className={styles.btnHero}><Button onClick={handleExploreClick} text="Explore Products" /></div>
        </div>
      </div>
      <div className={styles.imgArea}>
        <img className={styles.tea} src={teaImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
