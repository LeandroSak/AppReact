
import ItemList from "./ItemList";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore"
import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshop) => {
      const data = snapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if (name) {
        setItems(data.filter((product) => product.category === name));
        setLoading(false);
      } else {
        setItems(data)
        setLoading(false);
      }
    })

  }, [name]);

  return (
    <>
      {loading === true ? (

        <div >
          <div className="position-absolute top-50 start-50 translate-middle" ><Spinner animation="border" role="status" /></div>
        </div>
      ) : (
        <ItemList items={items} />
      )}</>
  )
};

export default ItemListContainer;