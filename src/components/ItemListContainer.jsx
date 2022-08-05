import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import api from "../data/api.json"
import {useState , useEffect} from "react"
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs} from "firebase/firestore"

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(data);
      })
  }, [name]);

    {/*promise.then((res) => {
      const products = res;
      if (name) {
        setItems(products.filter((product) => product.category == name));
      } else {
        setItems(products);
      }
    });
  }, [name]);*/}
    return (
    <>
    <ItemList items={items}/>
    </>
    )
  };
  
  export default ItemListContainer;