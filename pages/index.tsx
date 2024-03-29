
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Search from '@/components/Search'
import Filters from '@/components/Filters'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import Featured from '@/components/Featured'

export default function Home() {
  interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    rating: {
    rate: number;
    count: number;
  }
  }
 
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] =useState<Product[]>([]);
  const [viewText, setViewText] = useState('View all products');
  const [size, setSize] = useState(4);

  const getProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setProducts(data);
    setAllProducts(data);
  }
  useEffect(() => {
    getProducts()
  }, []);

      
 
  return (
    
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Search 
      setProducts={setProducts}
      products={allProducts}
      />
      <Filters 
      setProducts={setProducts}
      />
      <div className={styles.products}>
      {
      products.slice(0, size).map((product:Product) => (
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
      {
        products.length === 0 && <div className={styles.noProducts}>No products found</div>
      }
     
        {
          products.length > 0 && <div className={styles.viewAllDiv}>
            <button
            className={styles.viewAll}
            onClick={() =>{ 
              setSize(size === 4 ? allProducts.length : 4)
              setViewText(viewText === 'View all products' ? 'View less products' : 'View all products')
            }}
            >{viewText.toLocaleUpperCase()}</button>
          </div>
        }
           {
          products.length > 0 && <Featured 
          products={allProducts}
          />
        }
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