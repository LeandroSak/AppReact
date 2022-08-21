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
import notie from 'notie';


export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setItemCart] = useState([]);
  const [orderId, setOrderId] = useState();

  const addItem = (item, amount) => {
    const newItem = isInCart(item);
    
    if (newItem) {
      let total = amount += newItem.amount;
      newItem.amount = total;
      notie.alert({ type: 'warning', text: "Se agrego cantidad del producto "+ item.title , time:2})
      setItemCart(
        cartItems.splice(
          cartItems.findIndex((element) => element.id === item.id),
          1
        )
      );
      addLocalStorage();
    }item.amount = amount;
    setItemCart([...cartItems, item]);
    notie.alert({ type: 'success', text: 'Se agrego al carrito el producto '+item.title, time: 2 })
    addLocalStorage();
  };

  const isInCart = (item) => {
    return cartItems.find((element) => element.id === item.id);
  };

  const clear = () => {
    setItemCart([]);
    notie.alert({ type: 'error', text: 'Se eliminaron todos los productos del carrito!', time:2 })
  };

  const removeItem = (item, itemId) => {

    setItemCart(cartItems.filter((element) => element.id !== itemId));
    notie.alert({ type: 'error', text: 'Se elimino del carrito el producto '+item.title, time:2 })
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
      setOrderId(addResponse.id);
      setItemCart([]);
      localStorage.clear();
    } else {
      alert(
        "The purchase wasn't completed. There aren't enough items in stock"
      );
    }
  };

  const addLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(cartItems));
  }
  window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
      setItemCart(storage);
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, removeItem, addItem, clear, sendOrder, orderId, addLocalStorage}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;