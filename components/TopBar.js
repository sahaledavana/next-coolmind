import React, { useContext, useEffect, useState } from "react";
import Tbst from "../styles/TopBarSt.module.css";
import MenuSt from "../styles/MenuBatSt.module.css"
import Image from "next/image";
import Link from "next/link";
import Store from "../utils/Store";

export default function TopBar() {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const[menu,setMenu] = useState(0);

  return (
    <>
    <div className={Tbst.TopBarContainer}>
      <div className={Tbst.LSection}>
        <div className={Tbst.Icon}>
          <Image src={"/menu.png"} width={50} height={50} 
          onClick= { () => {
            setMenu(!menu) 
        }}
        />
        </div>
      </div>
      <div className={Tbst.MSection}>
        <div className={Tbst.Icon}>
          <Link href="/" className="text-lg font-bold">
            <Image src={"/home.png"} width={50} height={50} />
          </Link>
        </div>
      </div>
      <div className={Tbst.RSection}>
        <div className={Tbst.Icon}>
          <Link href="/login">
            <Image src={"/user.png"} width={50} height={50} />
          </Link>
        </div>
        <div className={Tbst.CartIcon}>
          <Link href="/cart" className="text-lg font-bold text-yellow-500">
            <Image src={"/cart.png"} width={50} height={50} />
            {cartItemsCount > 0 && (
              <span className={Tbst.NumofItemsinCart}>{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
    
    <div className={!menu ?MenuSt.MenuNotShow : MenuSt.Menu}>Hello</div>
         
   </>

    
  );
}
