import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import api from "../data/api.json"
import {useState , useEffect} from "react"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(api), 2000);
  });

  useEffect(() => {
    promise.then((res) => setItems(api));
  }, []);
    return (
    <>
    <ItemList items={items}/>
    </>
    )
  };
  
  export default ItemListContainer;