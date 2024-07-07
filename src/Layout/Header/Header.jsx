import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import profileImg from "../../assets/profile-img.svg";
import Cart from "../../assets/Cart.svg";
import search from "../../assets/search.svg";
// import menu from "../../assets/menu.svg";


const Header = () => {



  return (
    <div className={styles.header}>
      <div className={styles.searchBar}>
        <img className={styles.Logo} src={Logo} alt="" />
        <img src={search} alt="" />
        <input placeholder="search" type="text" />
        <div className={styles.profile}>
          <img src={profileImg} alt="" />
          <img className={styles.Cart} src={Cart} alt="" />
        </div>
      </div>
      <hr />
      <div className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Contact Us </li>
        <li>FAQ</li>
      </ul>
      </div>

    </div>
  );
};

export default Header;
