import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/Product.module.scss';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
  rating: {
    rate: number;
    count: number;
  };
}

interface Props {
  url: string;
}

const SmallImage: React.FC<Props> = ({ url }) => {
  return (
    <div className={styles.smallImage}>
      <Image src={url} width={100} height={100} alt='' />
    </div>
  );
};

function Product() {

    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<ProductType | undefined>();
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);
  
    useEffect(() => {
      setLoading(true);
      id &&
      axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!product) {
      return <div>Product unavailable</div>;
    }

  return (
    <div className={styles.product}>
      <Navbar />
  
        <div className={styles.item}>
            <div className={styles.mobileTitle}>
                <h1>{product.title}</h1>
            </div>
          <div className={styles.images}>
            <div className={styles.mainImage}>
                <div className={styles.mainimg}>
                <Image  src={product.image}
                        width={310}
                        height={310}
                alt='' />

                </div>
            
            </div>
            <div className={styles.smallImages}>
              <SmallImage url={product.image} />
              <SmallImage url={product.image} />
              <SmallImage url={product.image} />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              <h1>{product.title}</h1>
            </div>
            <div className={styles.price}>
              <span className={styles.value}>$ {product.price}</span>
              <span className={styles.from}>from Nostress</span>
            </div>
            <div className={styles.ratings}>
              <div className={styles.rating}>
                <StarRatings
                  rating={product.rating?.rate ?? 0}
                  starRatedColor="#FFCD29
"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
              </div>
              <div className={styles.count}>
                <span>{product.rating?.count ?? 0} Reviews</span>
              </div>
            </div>
            <div className={styles.description}>
              <p>{product.description}</p>
            </div>
            <div className={styles.add_cart}>
              <div className={styles.inputs}>
                <span className={styles.minus}
                onClick={() => {
                    if (count > 1) {
                        setCount(count - 1);
                    }
                }
                }
                >-</span>
                <input
                onChange={
                    (e) => {
                        let value = parseInt(e.target.value);
                    
                        if(value > 0) {
                            setCount(value);
                            return;
                        }
                        setCount(1);  
                    }
                }
                 className={styles.input} type="text" value={count} />
                <span
                onClick={() => {
                    setCount(count + 1);
                }}
                 className={styles.plus}>+</span>
              </div>
                <button className={styles.button}>Add to Cart</button>
            </div>
            <div className={styles.compare_save}>
              <button
                className={styles.compare}
              >
            COMPARE
              </button>
                <button
                    className={styles.save}
                >
            SAVE
                </button>
            </div>
          </div>
        </div>   
   <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
        background-color: #0f2330;
      }
    `}</style>
    </div>

);
}

export default Product;