import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss'
import { BiExit } from 'react-icons/bi';


function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: `/`,
    });
  };
  return (
    <div className={styles.navbar}>
      <h1 
      onClick={handleClick}
      className={styles.logo}>
          <span >
          NO
          </span>
        <span className={styles.logo_text1}>
          STRESS
        </span>
      </h1>
      <BiExit
       onClick={handleClick}
      size={24}
      color={'#FFCD29'}
      className={styles.exit}
       />
 
    </div>
  );
}

export default Navbar