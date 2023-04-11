
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Search from '@/components/Search'
import Filters from '@/components/Filters'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'

export default function Home() {
  interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    }
    
    

  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setProducts(data);
  }
  useEffect(() => {
    getProducts()
  }, []);

  console.log(products);
  return (
    
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
 
      <Navbar />
      <Search setProducts={setProducts}/>
      <Filters />
      <div className={styles.products}>
    {
      products.map((product:Product) => (
        <Card
        key={product.id}
          id={product.id}
          image= {product.image}
          title={product.title}
          price={product.price}
          category={product.category}
        />
      ))
    }
       

      </div>
      <div>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
        background-color: #0f2330;
      }
    `}</style>
    </div>
    </div>
  )
}