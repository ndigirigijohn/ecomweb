import React from 'react'
import styles from '../styles/Navbar.module.scss'
import { RxExit} from "react-icons/rx";


function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>
        NO
        <span className={styles.logo_text}>STRESS</span>
      </h1>
      <RxExit />
    </div>
  );
}

export default Navbar