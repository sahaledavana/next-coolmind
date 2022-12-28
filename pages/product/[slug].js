import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data'
import Store from '../../utils/Store'

export default function ProductScreen() {
    const { state , dispatch } = useContext(Store);
    const router = useRouter();
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find((x) => x.slug === slug);
    if(!product)
    {
        return <div> Produt Not Found </div>
    }
    
    const addToCartHandler = () => {
        console.log('Adding onClick'); 
       const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
       const quantity = existItem ? existItem.quantity + 1 : 1;
       dispatch({ type : 'CART_ADD_ITEM' , payload: { ...product , quantity : quantity }});         
       router.push('/cart'); 
    };

  return (
    <Layout title={product.name}>       
        <Link href="/">Back to products</Link>        
        <div className ="grid grid-cols-3">
        <Image
          src={product.image}
          alt={product.name}
          width={640}
          height={640}
          layout = "responsive">
        </Image>
        <div className='px-4'>
            <ul>
                <li>
                    <h1 className="text-lg">{product.name}</h1>
                </li>
                <li>Category : {product.category}</li>
                <li>Brand: {product.brand}</li>
                <li>{product.rating} of {product.numReviews} reviews </li>
            </ul>
        </div>
        <div className="carddetail p-5 ">
             <div className="mb-2 flex justify-between ">
                <div>Price</div>
                <div>${product.price}</div>
             </div>
             <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable' }</div>
             </div>
             <button className= "primary-button w-full" onClick = {addToCartHandler} >Add to cart</button>
        </div>
        </div>
         
    </Layout>
  )
}

