import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";



const Item = ({ item }) => {
  const { id,title, price, stock, image } = item;
  
  return (
    
    <div className="card " style={{ width: "15rem", marginBottom: "25px" }}>
      <img className="card-img-top" src={image} style={{ width: "14.9rem", height: "14.9rem" }} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">Precio: $<strong>{price}</strong></p>
      </div>
      
      <div className="d-flex justify-content-center" style={{ margin: "5px" }}>
        <Link to={"/item/"+String(id)} element={<ItemDetailContainer />}>
        <button  type="button" className="btn btn-primary" >Descripcion</button>
        </Link>
      </div>
      <div className="card-footer text-muted">
      <p className="card-text text-center">{`${stock} unidades disponibles`}</p>
      </div>
    </div>
  );
};

export default Item;