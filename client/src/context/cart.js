// import React from "react";
// import{Link} from "react-router-dom"
// const cart=()=>{
//   return(
//     <div className="cart">
//       <h1>Cart</h1>
//     </div>
//   );
// };

// export default cart;

import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // let existingCartItem = localStorage.getItem("cart");
    // if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// // custom hook
 const useCart = () => useContext(CartContext);

 export { useCart, CartProvider };


