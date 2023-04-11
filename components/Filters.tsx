import React from "react";
import styles from "../styles/Filters.module.scss";
import { ImCancelCircle } from "react-icons/im";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <button style={{backgroundColor:'#f0c22a'}} className={styles.btn}>All products <ImCancelCircle/></button>
      <button className={styles.btn}>Where to use <ImCancelCircle/></button>
      <button className={styles.btn}>For what <ImCancelCircle/></button>
      <button className={styles.btn}>Price <ImCancelCircle/></button>
    </div>
  );
};

export default Filters;