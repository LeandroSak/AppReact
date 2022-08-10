import { CartContext } from "../contexts/CartContext";
import { useState, useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cartItems, removeItem, clear, sendOrder } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const time = new Date().toLocaleString();
        const data = Array.from(inputs).map((input, index) => input.value);
        sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2], }, time);

    }
    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total = total + (item.price * item.amount);
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
                    <div className="d-flex justify-content-center">
                        <form onSubmit={handleSubmit} className=" text-center">
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" />

                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" />

                            </div>

                            <div className="mb-3">
                                <label className="form-label">DNI</label>
                                <input type="tel" className="form-control" />

                            </div>
                            <button type="submit" className="btn btn-primary">Comprar</button>
                        </form>
                    </div>

                </>
            )}
        </>
    );
}

export default Cart;