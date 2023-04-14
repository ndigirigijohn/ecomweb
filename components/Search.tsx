import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../styles/Search.module.scss";
import { FaTimes } from "react-icons/fa";

interface SearchProps {
  setProducts: React.Dispatch<React.SetStateAction<any>>;
  products: any;
}

const Search: React.FC<SearchProps> = ({ setProducts, products }) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setProducts(products.filter((product: any) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    }
    ));  
  };

  return (
    <div className={styles.content}>
      <div className={styles.search}>
          <AiOutlineSearch 
          fontSize={20}
          color="#FFCD29"
          className={styles.search_icon} />
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          className={styles.search_bar}
        />
          <FaTimes
          fontSize={20}
          color="#0F2330"
          className={styles.clear_icon}
          />
      </div>
    </div>
  );
};

export default Search;
