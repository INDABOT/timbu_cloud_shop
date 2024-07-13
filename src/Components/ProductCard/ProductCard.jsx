/* eslint-disable react/prop-types */
import styles from "./ProductCard.module.css";
import Heart from "../../Layout/Heart/Heart";
import Cart from "../../Layout/Cart/Cart";

const ProductCard = ({ product, text, rating, starNo }) => {
  return (
    <div className={styles.pCard}>
      <div className={styles.Card_container}>
        <img className={styles.pImg} src={product.image} alt={product.name} />
        <div className={styles.hrtC}>
          <Heart />
        </div>
        <div className={styles.info}>
          <h4>{product.name}</h4>
          <span>{product.price}</span>
        </div>
        <p>{text}</p>
        <div className={styles.starctn}>
          <img src={rating} alt="" /> <span>{starNo}</span>
          <div className={styles.crtBtn}>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
