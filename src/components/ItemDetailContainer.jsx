
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemDoc = doc(db, "items", id);
    getDoc(itemDoc).then((snapshot) => {
      setItems({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
    });
  }, [id]);

  return (<>
    {loading === true ? (

      <div >
        <div className="position-absolute top-50 start-50 translate-middle" ><Spinner animation="border" role="status" /></div>
      </div>
    ) : (
      <><ItemDetail key={items.id} item={items} /></>
    )}

  </>
  )
};


export default ItemDetailContainer;