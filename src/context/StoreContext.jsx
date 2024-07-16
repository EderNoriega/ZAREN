import { createContext, useEffect, useState } from "react";
import { ropa_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

   const [cartItems, setCartItems] = useState({});

   const addToCart = (itemId) => {
      if (!cartItems[itemId]) {
         setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
      }
      else {
         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
      }
   }

   const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
   }

   useEffect(()=>{
      console.log(cartItems)
   },[cartItems])

   const getTotalCartAmount = () => {
      let totalAmount = 0; 1
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            let itemInfo = ropa_list.find((product) => product._id == item);
            totalAmount += itemInfo.price * cartItems[item];
         }
      }
      return totalAmount;
   }

   const contextValue = {
      ropa_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount
   }

   return (
      <StoreContext.Provider value={contextValue}>
         {props.children}
      </StoreContext.Provider>
   )
}

export default StoreContextProvider;