import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../styles/Search.module.scss";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";

interface SearchProps {
  setProducts: React.Dispatch<React.SetStateAction<any>>;
}

const Search: React.FC<SearchProps> = ({ setProducts }) => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    console.log("searching for: ", searchValue)

    axios
      .get(`https://fakestoreapi.com/products?title=${searchValue}`)
      .then((res) => {
        setProducts(res.data);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <button>
          <AiOutlineSearch className={styles.search_icon} />
        </button>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          className={styles.search_bar}
        />
        <button>
          <ImCancelCircle />
        </button>
      </div>
    </div>
  );
};

export default Search;
