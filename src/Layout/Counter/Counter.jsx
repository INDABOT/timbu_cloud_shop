import  { useState } from "react";
import styles from "./Counter.module.css"; 

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counterContainer}>
      <button className={styles.button} onClick={decrement}>
        -
      </button>
      <div className={styles.countDisplay}>{count}</div>
      <button className={styles.button} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
