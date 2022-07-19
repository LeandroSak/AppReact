import { useState } from "react";


const Item = ({ item }) => {
  const { title, price, stock, image } = item;
  
  return (
    <div className="card " style={{ width: "15rem", marginBottom: "25px" }}>
      <img className="card-img-top" src={image} style={{ width: "15rem", height: "15rem" }} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">Precio: $<strong>{price}</strong></p>
      </div>
      
      <div className="d-flex justify-content-center" style={{ margin: "5px" }}>
        <button  type="button" className="btn btn-primary" >Descripcion</button>
        
      </div>
      <div className="card-footer text-muted">
      <p className="card-text text-center">{`${stock} unidades disponibles`}</p>
      </div>
    </div>
  );
};

export default Item;