import api from "../data/api.json"
import {useState , useEffect} from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
    const [items, setItems] = useState([]);
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(api), 2000);
    });
  
    useEffect(() => {
      promise.then((res) => {
        const products = res;
        if (id) {
          setItems(products.filter((product) => product.id == id));
        } else {
          setItems(products);
        }
      });
    }, [id]);
      return (
        <>
          {items.map((item) => (
            
              <ItemDetail key={item.id} item={item} />
            
          ))}
        </>
      )
    };

 
export default ItemDetailContainer;