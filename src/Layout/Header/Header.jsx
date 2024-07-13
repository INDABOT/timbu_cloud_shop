import  { useState } from 'react';
import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.searchBar}>
        <img className={styles.Logo} src={Logo} alt="Logo" />
        <img className={styles.search} src={search} alt="Search" />
        <input className={styles.Hinput} placeholder="search" type="text" />
        <div className={styles.profile}>
          <img className={styles.menuToggle} src={menu} alt="Menu" onClick={toggleSidebar} />
          <a href="/shopping"><img className={styles.Cart} src={Cart} alt="Cart" /></a>
        </div>
      </div>
      <hr />
      <div className={styles.nav}>
        <ul className={styles.ul}>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </div>
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <input type="text" placeholder="Search..." className={styles.sidebarSearchBar} />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </nav>
      </div>
      {sidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Header;
