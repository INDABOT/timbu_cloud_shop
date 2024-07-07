import styles from "./Payment.module.css";
import visa from "../../assets/visa.svg";
import master from "../../assets/master.svg";
import applePay from "../../assets/apple-pay.svg";
import gPay from "../../assets/G-pay.svg";

const Payment = () => {
  return (
    <div className={styles.Payment}>
      <img src={visa} alt="" />
      <img src={master} alt="" />
      <img src={applePay} alt="" />
      <img src={gPay} alt="" />
    </div>
  );
};

export default Payment;
