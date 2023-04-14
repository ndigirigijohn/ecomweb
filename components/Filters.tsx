import React, { useState } from "react";
import styles from "../styles/Filters.module.scss";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<any>>;
}

const Filters = ({ setProducts }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = async (category: string) => {
    setSelectedCategory(category);
    if (category === "") {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(res.data);
    } else {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(res.data);
    }
  };

  const getButtonStyle = (category: string) => {
    if (category === selectedCategory) {
      return { backgroundColor: "#f0c22a" };
    } else {
      return {};
    }
  };

  return (
    <div className={styles.filters}>
      <button
        onClick={() => {
          handleCategory("");
        }}
        style={getButtonStyle("")}
        className={styles.btn}
      >
        All products 
      </button>
      <button
        onClick={() => {
          handleCategory("electronics");
        }}
        style={getButtonStyle("electronics")}
        className={styles.btn}
      >
        Electronics
      </button>
      <button
        onClick={() => {
          handleCategory("jewelery");
        }}
        style={getButtonStyle("jewelery")}
        className={styles.btn}
      >
        Jewelery
      </button>
      <button
        onClick={() => {
          handleCategory("men's clothing");
        }}
        style={getButtonStyle("men's clothing")}
        className={styles.btn}
      >
        Men&apos;s clothing
      </button>
      <button
        onClick={() => {
          handleCategory("women's clothing");
        }}
        style={getButtonStyle("women's clothing")}
        className={styles.btn}
      >
        Women&apos;s clothing
      </button>
    </div>
  );
};

export default Filters;
