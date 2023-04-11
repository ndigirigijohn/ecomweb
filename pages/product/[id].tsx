import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/Product.module.scss';
import Image from 'next/image';
import Navbar from '@/components/Navbar';



interface ProductType {
id: number;
title: string;
price: number;
description: string;
category: string;
image: string;
rating: {
rate: number;
count: number;
};
}

function Product() {
const router = useRouter();
const { id } = router.query;
const [product, setProduct] =  useState<ProductType | false>();

useEffect(() => {
axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
setProduct(res.data);
});
}, [id]);

return (
    <div className={styles.container}>
    <Navbar />
    <button className={styles.backButton } onClick={()=>router.back()}>
      Back
    </button>

    {
        !product? <h1>Loading...</h1>
        :

<div className={styles.content}>
<div className={styles.imageWrapper}>
    <Image
        className={styles.image}
        width={300}
        height={300}
        src={product.image}
        alt={product.title}
    />

</div>
<div className={styles.productDetails}>
<h1 className={styles.title}>{product.title}</h1>
<h3 className={styles.category}>{product.category}</h3>
<p className={styles.description}>{product.description}</p>
<div className={styles.rating}>
<span>{product.rating?.rate}</span>
<span>({product.rating?.count})</span>
</div>
<h2 className={styles.price}>${product.price}</h2>
<button className={styles.buyButton}>Add to Cart</button>
</div>
</div>
    }

</div>

);
}

export default Product;