
import ItemList from "./ItemList";
import {useState , useEffect} from "react"
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs} from "firebase/firestore"


const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshop) => {
      const data = snapshop.docs.map((doc) => ({id: doc.id, ...doc.data() }));
      if(name){
        setItems(data.filter((product) => product.category === name));
      } else {
        setItems(data)
      }
    })
  
  }, [name]);

    return (
    <>
    <ItemList items={items}/>
    </>
    )
  };
  
  export default ItemListContainer;