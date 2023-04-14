import React from 'react'
import styles from '../styles/Navbar.module.scss'
import { BiExit } from 'react-icons/bi';


function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>
          <span >
          NO
          </span>
        <span className={styles.logo_text1}>
          STRESS
        </span>
      </h1>
      <BiExit
      size={24}
      color={'#FFCD29'}
      className={styles.exit}
       />
 
    </div>
  );
}

export default Navbar