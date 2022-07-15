import { useState } from "react";

const Item = ({ item }) => {
  const { title, price, stock, image } = item;
  const [count, setCount] = useState(0);

  const updateCount = (operation) => {
    if (operation === "-" && count > 0) {
      setCount(count - 1);
    } else if (operation === "+" && count < stock) {
      setCount(count + 1);
    }
  };
  const addCart = () => {
    alert("Se agregaron " + count + " al carrito");
  }
  return (
    <div className="card " style={{ width: "15rem", marginBottom: "25px" }}>
      <img className="card-img-top" src={image} style={{ width: "15rem", height: "15rem" }} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">Precio: $<strong>{price}</strong></p>
      </div>
      <div className="d-flex justify-content-center input-group" >
        <button type="button" style={{ height: "30px" }} className="btn btn-primary" onClick={() => updateCount("-")}>-</button>
        <input value={count} style={{ width: "3rem", height: "30px" }} className="text-center" ></input>
        <button type="button" style={{ height: "30px" }} className="btn btn-primary" onClick={() => updateCount("+")}>+</button>
      </div>
      <div className="d-flex justify-content-center" style={{ margin: "5px" }}>
        <button onClick={() => addCart()} type="button" className="btn btn-primary" disabled={count === "" || count === 0}>Agregar al carrito!</button>
      </div>
      <div class="card-footer text-muted">
      <p className="card-text text-center">{`${stock} unidades disponibles`}</p>
      </div>
    </div>
  );
};

export default Item;