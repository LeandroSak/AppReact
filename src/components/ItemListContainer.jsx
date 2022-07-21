import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import api from "../data/api.json"
import {useState , useEffect} from "react"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(api), 2000);
  });

  useEffect(() => {
    promise.then((res) => {
      const products = res;
      if (name) {
        setItems(products.filter((product) => product.category == name));
      } else {
        setItems(products);
      }
    });
  }, [name]);
    return (
    <>
    <ItemList items={items}/>
    </>
    )
  };
  
  export default ItemListContainer;