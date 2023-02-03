/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}) {
  return (
    <div className="card bg-black">
        <Link href = {`/product/${product.slug}`}
          className="rounded shadow p-2 items-center  ">
        <img
        src={product.image}
        alt={product.name}
        style={{ width: '100px',height : '100px' }}
        
         />
        </Link>
         <div className="flex flex-col items-center justify 
                         p-1 bg-amber-900 height : 50px ">
         <Link href={`/product/${product.slug}`}>
             <h2  className="text-lg">{product.name}</h2>
          </Link>
          <p className="mb-2">{product.brand}</p>
          <p>${product.price}</p>
          <button className="primary-button" type="button">
             Add to cart
          </button>
         </div>     
    </div>
  )
}
