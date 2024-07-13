import styles from "./Review.module.css";
import star from "../../assets/star.svg";
import { productData } from "../../../data";
import ProductCard from "../ProductCard/ProductCard";
const Review = () => {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.R_heading}>
        <h5>Reviews </h5>
      </div>
      <div className={styles.testimonyContainer}>
        <div className={styles.testimony}>
         <p className={styles.name}>Jennifer Adisson</p>
          <img src={star} alt="" />
          <p>
            This tea really worked for my belly. It was my first time using this
            particular one. Kudos to the team. I’m really impressed.
          </p>
          <small>3 hours ago</small>
        </div>

        <div className={styles.testimony}>
          <p className={styles.name}>Emily Stuart</p>
          <img src={star} alt="" />
          <p>
            Absolutely love this herbal tea! The blend of chamomile and lavender
            is so soothing, perfect for unwinding after a long day.
          </p>
          <small>4 hours ago</small>
        </div>

        <div className={styles.testimony}>
          <p className={styles.name}>Karen Lee</p>
          <img src={star} alt="" />
          <p>
            This herbal tea is a game-changer. I drink it every morning, and it
            helps me start my day feeling refreshed and balanced.
          </p>
          <small>3 hours ago</small>
        </div>
      </div>
      <div className={styles.R_heading}>
        <h5>Similar Products</h5>
      </div>
      <div className={styles.similarProducts}>
        {productData.slice(0, 3).map((item) => {
          return (
            <ProductCard
              img={item.img}
              title={item.title}
              price={item.price}
              text={item.text}
              rating={item.rating}
              starNo={item.starNo}
              key={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Review;
