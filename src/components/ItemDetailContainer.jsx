import api from "../data/api.json"
import ItemList from "./ItemList";
import api2 from "../data/api.json"
import {useState , useEffect} from "react"
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({item}) => {
    const [items, setItems] = useState([]);
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(api2), 2000);
    });
  
    useEffect(() => {
      promise.then((res) => setItems(api2));
    }, []);
      return (
        <>
          {items.map((item) => (
            
              <ItemDetail key={item.id} item={item} />
            
          ))}
        </>
      )
    };

 
export default ItemDetailContainer;