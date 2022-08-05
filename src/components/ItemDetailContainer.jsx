
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemDoc = doc(db, "items", id);
    getDoc(itemDoc).then((snapshot) => {
      setItems({ ...snapshot.data(), id: snapshot.id });

    });
  }, [id]);

  return (
    <>
      <ItemDetail key={items.id} item={items} />
    </>
  )
};


export default ItemDetailContainer;