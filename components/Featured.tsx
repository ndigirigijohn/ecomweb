import React, { FC , useEffect, useState} from 'react';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import styles from '../styles/Featured.module.scss'
import Item from './Item';

interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    rating: {
        rate: number;
        count: number;
    };

}
interface Props {
    products: Product[];
  }



const Featured: FC<Props> = ({ products }) => {
const random = () =>{ return Math.floor(Math.random() * products.length)}





  return (
    <div className={styles.featured} >
        <h1 className={styles.main_title} >Featured products</h1>
        <div className={styles.featured_items}>
            <Item product={products[random()]} />
            <Item product={products[random()]} />
        </div>

    </div>
    
  );
};

export default Featured;
