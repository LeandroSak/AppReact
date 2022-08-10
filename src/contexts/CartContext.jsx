import React, { createContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";


export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setItemCart] = useState([]);

  const addItem = (item, amount) => {
    const newItem = isInCart(item);
    if (newItem) {
      let total = amount += newItem.amount;
      newItem.amount = total;
      setItemCart(
        cartItems.splice(
          cartItems.findIndex((element) => element.id === item.id),
          1
        )
      );
    }
    item.amount = amount;
    setItemCart([...cartItems, item]);
  };

  const isInCart = (item) => {
    return cartItems.find((element) => element.id === item.id);
  };

  const clear = () => {

    setItemCart([]);
  };

  const removeItem = (item, itemId) => {

    setItemCart(cartItems.filter((element) => element.id !== itemId));
  };

  const sendOrder = async (totalPrice, buyerData, time) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
      time: time,
    };

    const batch = writeBatch(db);
    const idList = cartItems.map((product) => product.id);
    const withoutStock = [];
    const collectionItems = collection(db, "items");
    const docsResponse = await getDocs(
      query(collectionItems, where(documentId(), "in", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = cartItems.find((prod) => prod.id === doc.id);

      if (dataDoc.stock >= prod.amount) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.amount });
      } else {
        withoutStock.push({ prod });
      }
    });
    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      clear();
      alert(`Tu codigo de compra es: ${addResponse.id}`);
    } else {
      alert(
        "The purchase wasn't completed. There aren't enough items in stock"
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, removeItem, addItem, clear, sendOrder}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;