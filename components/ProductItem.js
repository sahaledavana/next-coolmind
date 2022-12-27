/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}) {
  return (
    <div className="card">
        <Link href = {`/product/${product.slug}`} className="rounded shadow">
        <img
        src={product.image}
        alt={product.name}
         />
        </Link>
         <div className="flex flex-col items-center justify p-5">
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
