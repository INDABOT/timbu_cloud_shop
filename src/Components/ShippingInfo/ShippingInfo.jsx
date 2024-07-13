import { useState } from 'react';
import styles from "./ShippingInfo.module.css";

const ShippingInfo = () => {
  // State to manage the visibility of the popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle the button click event
  const handlePlaceOrder = () => {
    setShowPopup(true);
  };

  return (
    <div className={styles.ShippingInfo}>
      <input
        className={styles.firstInput}
        placeholder="Email:   johndoe@gmail.com"
        type="text"
      />

      <input className={styles.secondInput} placeholder="Address:  Apt no, Street" type="text" />
      <input className={styles.thirdInput} placeholder="City:" type="text" />
      <input className={styles.fourthInput} placeholder="Country:" type="text" />

      <h3 className={styles.payInfo1}>Payment Information</h3>
      <input
        className={styles.cardInput}
        placeholder="Card Number:   XXXX   XXXX   XXXX   XXXX"
        type="text"
      />
      <div className={styles.expiry}>
        <input
          className={styles.expiryInput}
          placeholder="Expiry date:  MM/YYYY"
          type="text"
        />
        <input
          className={styles.CVVInput}
          placeholder="CVV:   XXX"
          type="text"
        />
      </div>
      <button className={styles.orderButton} onClick={handlePlaceOrder}>Place Order</button>

      {/* Conditional rendering of the popup */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2 className={styles.success}>Success</h2>
            <p>Your payment was successful and your order will be delivered in the next few days.</p>
            <button onClick={() => setShowPopup(false)} className={styles.popupButton}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippingInfo;
