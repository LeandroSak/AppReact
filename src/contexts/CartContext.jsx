import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setItemCart] = useState([]);

  const addItem = (item, amount) => {
    const newItem = isInCart(item);
    if (newItem) {
      let total = amount + newItem.amount;
      newItem.amount=total;
      setItemCart(
        cartItems.splice(
          cartItems.findIndex((element) => element.id === item.id),
          1
        )
      );
    }
    item.amount=amount;
    setItemCart([...cartItems,  item ]);
  };

  const isInCart = (item) => {
    return cartItems.find((element) => element.item === item);
  };

  const clear = () => {
    cartItems.forEach((item) => {
      item.stock=item.stock+item.amount;
    });
    setItemCart([]);
  };

  const removeItem = (item,itemId) => {
    let itemCart=cartItems.find((element) => element === item);
    item.stock = item.stock+itemCart.amount;
    setItemCart(cartItems.filter((element) => element.id !== itemId));
  };

  
  return (
    <CartContext.Provider value={{ cartItems, removeItem, addItem , clear}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;