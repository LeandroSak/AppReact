import { CartContext } from "../contexts/CartContext";
import { useState, useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cartItems, removeItem, clear } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total = total + (item.price*item.amount);
        });
        setTotalPrice(total);
    }, [cartItems]);

    return (
        <>
            {cartItems.length === 0 ? (
                <>
                    <div className="text-center">
                        <p>No hay items! Agrega algunos</p>
                        <Link to="/">Volver</Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="container">
                        <h2 className="text-center ">Carrito</h2>
                        <table className="table table-striped  align-middle table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th >Nombre productos</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="tbody" style={{ fontSize: "25px" }}>
                                {cartItems.map((element) => (
                                    <tr >
                                        <CartItem item={element} removeItem={removeItem} />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <button type="button" className="btn btn-danger " onClick={() => clear()}>Vaciar Carrito</button>
                        </div>
                        <div className="col-sm">
                            <h1 className="">{`Tu total es: $${totalPrice}`}</h1>
                        </div>
                    </div>

                </>
            )}
        </>
    );
}

export default Cart;