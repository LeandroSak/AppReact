import ItemCount from "./ItemCount";

const ItemListContainer = ({gretting}) => {
    
    return (
    <>
    <p>{gretting}</p>
    <ItemCount stock={5} />
    </>
    )
  };
  
  export default ItemListContainer;