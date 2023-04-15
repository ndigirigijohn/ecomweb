import React, { FC , useEffect, useState} from 'react';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import styles from '../styles/Item.module.scss'


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

const Item = ({ product }: { product: Product }) => {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <Image src={product.image} width={80} height={80} alt='' />
            </div>
            <div className={styles.content}>
                <h3 className={styles.item_title} >{product.title}</h3>
                <div className={styles.rating_price}>
                    <StarRatings
                        rating={product.rating.rate}
                        starRatedColor="#FFCD29"
                        numberOfStars={5}   
                        starDimension="20px"
                        starSpacing="2px"
                        name='rating'
                    />
                    
                    <p className={styles.price}>
                        <span className="currency">$</span>
                        <span className="amount">{product.price}</span>
                    </p>
                  
                 
                </div>
            </div>
            
        </div>
    )
}

export default Item;
