import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Card.module.scss';
import Image from 'next/image';

interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

function Card({ id, image, title, price, category }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: `product/${id}`,
      query: { id: id },
    });
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div
       className={styles.image}
      >
      <Image
        className={styles.img}
        width={300}
        height={300}
        src={image}
        alt={title}
      />
        
      </div>
  
      <h2>{title}</h2>
      <div
        className={styles.info}
      >
        <p>{price}</p>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default Card;
