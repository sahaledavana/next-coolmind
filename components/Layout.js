import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../utils/Store'

export default function Layout({title, children }) {
  console.log("Inside cart");
  const { state } = useContext(Store) ;
  const { cart } = state;
  const [cartItemsCount,setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity , 0 ))
  },[cart.cartItems]);
  return (
    <>
    <Head>
    <title>{title ? title + '- CoolMinds' : 'CoolMinds '}</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <div className="flex min-h-screen flex-col justify-between">
        <header>
            <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href = "/" className="text-lg font-bold">CoolMinds</Link>
            <div>
                    <Link href="/cart"  className="p-2">Cart
                    {cartItemsCount > 0 && (
                     <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                        {cartItemsCount}
                     </span>   
                    )} 
                    </Link>
                    <Link href="/login" className="p-2">Login</Link>
            </div>
            </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{ children }</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
            <p> Copyright © 2022 CoolMinds </p>
        </footer>
    </div>
    </>
  )
}
