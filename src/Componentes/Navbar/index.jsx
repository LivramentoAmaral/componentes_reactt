import React from "react";
import styles from "./styles.module.css"


function Navbar(){
    return(
        <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#home">Home</a></li>
          <li className={styles.navItem}><a href="#about">Sobre</a></li>
          <li className={styles.navItem}><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;