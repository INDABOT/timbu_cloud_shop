import styles from "./CheckOutHero.module.css";
import C1 from "../../assets/C1.png";
import C2 from "../../assets/C2.png";
import C3 from "../../assets/C3.png";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import { useState } from "react";

const CheckOutHero = () => {
  const [counts, setCounts] = useState({ item1: 1, item2: 1, item3: 1 });

  const increment = (item) => {
    setCounts((prevCounts) => ({ ...prevCounts, [item]: prevCounts[item] + 1 }));
  };

  const decrement = (item) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [item]: prevCounts[item] > 1 ? prevCounts[item] - 1 : 1,
    }));
  };

  return (
    <div className={styles.checkOutContainer}>
      <div className={styles.shoppingCart}>
        <h3>Shopping cart</h3>
        <div className={styles.itemContainer}>
          <div className={styles.C1_container}>
            <div className={styles.checkImgctn}>
              <img src={C1} alt="" />
            </div>
            <div className={styles.descript}>
              <h5>Blossom Harmony Tea</h5>
              <p>A perfect blend of nature’s <br /> finest herbs.</p>

              <div className={styles.counterContainer}>
                <button className={styles.button} onClick={() => decrement('item1')}>
                  -
                </button>
                <div className={styles.countDisplay}>{counts.item1}</div>
                <button className={styles.button} onClick={() => increment('item1')}>
                  +
                </button>
              </div>
            </div>
          </div>

          <div className={styles.pricing}>
            <span>₦3500</span>
            <span className={styles.SecondSpan}>Remove</span>
          </div>
        </div>

        <div className={styles.itemContainer}>
          <div className={styles.C1_container}>
            <div className={styles.checkImgctn}>
              <img src={C2} alt="" />
            </div>
            <div className={styles.descript}>
              <h5>Blossom Harmony Tea</h5>
              <p>A perfect blend of nature’s <br /> finest herbs.</p>

              <div className={styles.counterContainer}>
                <button className={styles.button} onClick={() => decrement('item2')}>
                  -
                </button>
                <div className={styles.countDisplay}>{counts.item2}</div>
                <button className={styles.button} onClick={() => increment('item2')}>
                  +
                </button>
              </div>
            </div>
          </div>

          <div className={styles.pricing}>
            <span>₦3500</span>
            <span className={styles.SecondSpan}>Remove</span>
          </div>
        </div>

        <div className={styles.itemContainer}>
          <div className={styles.C1_container}>
            <div className={styles.checkImgctn}>
              <img src={C3} alt="" />
            </div>
            <div className={styles.descript}>
              <h5>Blossom Harmony Tea</h5>
              <p>A perfect blend of nature’s <br /> finest herbs.</p>

              <div className={styles.counterContainer}>
                <button className={styles.button} onClick={() => decrement('item3')}>
                  -
                </button>
                <div className={styles.countDisplay}>{counts.item3}</div>
                <button className={styles.button} onClick={() => increment('item3')}>
                  +
                </button>
              </div>
            </div>
          </div>

          <div className={styles.pricing}>
            <span>₦3500</span>
            <span className={styles.SecondSpan}>Remove</span>
          </div>
        </div>
        <h3 className={styles.OrderSummary}>Order summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Subtotal: </td>
              <td>₦10,500</td>
            </tr>
            <tr>
              <td>Shipping Fee:</td>
              <td>₦3,000</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>₦13,500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.shippingInfo}>
        <h3>Shipping information</h3>
        <ShippingInfo />
      </div>
    </div>
  );
};

export default CheckOutHero;
