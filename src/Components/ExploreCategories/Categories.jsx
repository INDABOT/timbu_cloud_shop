/* eslint-disable react/prop-types */
import styles from "./Categories.module.css";
const Categories = ({text}) => {
  return (
    <div className={styles.Categories}>
      <div className="inner">
        <hr />
        <h3>{text}</h3>
        <hr />
      </div>
    </div>
  );
};

export default Categories;
