import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, amount) => {

    item.cantidad = amount;
    setCartItems((prevState) => [...prevState, item]);
  }
  const isInCart = (item, amount) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        const total = item.cantidad + amount;
        cartItems[i].cantidad = total;
        return null;

      }
    }
    addItem(item, amount);
  }

  const removeItem = (item) =>{
    for (let i = 0; i < cartItems.length; i++) {

      if (cartItems[i].id === item.id) {
        item.stock= item.stock+ cartItems[i].cantidad;
        cartItems.splice(i, 1);
      }
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, isInCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;