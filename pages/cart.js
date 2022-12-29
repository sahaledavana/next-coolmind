import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import Layout from '../components/Layout';
import Store from '../utils/Store'
import { XCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

function CartScreen() {
   const { state ,dispatch}   = useContext(Store);
   const router = useRouter();
   const {
    cart: { cartItems },

   } = state;

  const removeItemHandler = (item) => {
    dispatch({ type : 'CART_REMOVE_ITEM', payload : {...item} })
  };

  const updateCartHandler = (item,qty) => {
    const quantity = Number(qty);
    dispatch({type :'CART_ADD_ITEM',payload:{...item,quantity}})

  }
  return (
    <Layout title="Shopping Cart">
    <h1 className= "mb-4 text-xl">Shopping Cart</h1>
    {
        cartItems.length === 0 ? (
            <div>
                Cart is empty. <Link href ="/">Go Shopping</Link>
            </div>
        ):(
            <div className="grid md:grid-cols-4 md:gap-5">
               <div className="overflow-x-auo md:col-span-3">
                <table className="min-w-full">
                 <thead className="border-b">
                   <tr>
                      <th className="px-5 text-left">Item</th>    
                      <th className="p-5 text-right">Quantity</th>    
                      <th className="p-5 text-right">Price</th>    
                      <th className="p-5 ">Action</th>    
                   </tr>    
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                       <tr key = {item.slug} className = "border-b">
                       <td>
                            <Link href = {`/product/${item.slug}`} className = "flex items-center px-2 py-2">
                             <Image
                                src={item.image}
                                alt={item.name}
                                width={90}
                                height={62}
                              ></Image>
                              &nbsp;
                              {item.name}      
                            </Link>
                      </td>
                       <td className="p-5 text-right">
                       <select value={item.quantity} onChange={(e) =>
                         updateCartHandler(item,e.target.value)}> 
                        {
                          [...Array(item.countInStock).keys()].map( (x) => (
                             <option key={x+1} value={ x + 1 }>
                              {x + 1}
                             </option>
                          ))
                        } 
                        </select>
                       </td>
                        <td className="p-5 text-right">{item.price}</td>
                        <td className="p-5 text-center">
                            <button onClick={() => removeItemHandler(item)}>
                            <XCircleIcon className="h-5 w-5"></XCircleIcon>
                            </button>
                        </td>
                       </tr> 
                    ))} 
                  </tbody>
                </table>
               </div> 
               <div className="carddetail p-10   font-bold ">
               <div>Subtotal( {cartItems.length} ) :  $ 
                {cartItems.length > 0 && (
                     <span>
                        {cartItems.reduce((a, c) => a + (c.quantity * c.price) , 0 )}
                     </span>   
                )}
               </div>        
               &nbsp;      
               <button onClick={() => router.push('/shipping')}
               className= "primary-button w-full " >Check Out</button>                 
               </div>               
              
            </div>
        )
    }
    </Layout>
  )
}

 export default dynamic( ()=> Promise.resolve(CartScreen),{ssr:false}) 