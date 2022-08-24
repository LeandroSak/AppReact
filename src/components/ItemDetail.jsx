import { useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
    const { title, price, stock, image, category, description } = item;
    const { addItem, cartItems, addLocalStorage } = useContext(CartContext);
    const [amount, setAmount] = useState(0);
    const onAdd = (amount) => {
        setAmount(amount);
        addItem(item, amount);

    }
    useEffect(() => {
        addLocalStorage();
    }, [cartItems]
    );

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 div_imagenDetalle" >
                        <img className="imageDetail" src={image} />
                    </div>
                    <div className="col-lg-4 col-md-6" style={{ paddingTop: "20px" }} >

                        <h2 >{title}</h2>
                        <h5> {category} </h5>

                        <h6 className="title-price" ><small>PRECIO</small></h6>
                        <h3 style={{ marginTop: "0px" }}>$ {price}</h3>
                        <div className="section " >
                            <h6 className="title-attr"><small>CANTIDAD</small></h6>
                            <p className="">{`${stock} unidades disponibles`}</p>
                            {amount === 0 ? (
                                <ItemCount stock={stock} onAdd={onAdd} />
                            ) : (
                                <div>
                                    <h2> Se agregaron {amount} articulo(s)</h2>
                                    <div style={{ marginTop: "5px" }}>
                                        <Link to="/cart">
                                            <button type="button" className="btn btn-primary boton1" >Comprar</button>
                                        </Link>
                                        <Link to="/">
                                            <button type="button" className="btn btn-primary boton2" >Seguir comprando</button>
                                        </Link>
                                    </div>
                                </div>

                            )}

                        </div>
                    </div>
                    <div className="col-sm-10 ">
                        <ul className="menu-items" >
                            <li className="active">Descripcion del producto</li>
                        </ul>
                        <div className="description" >
                            <p style={{ padding: "15px" }} >
                                {description}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default ItemDetail;