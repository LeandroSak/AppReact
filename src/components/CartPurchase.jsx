import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import Spinner from 'react-bootstrap/Spinner';

const CartPurchase = () => {
    const { orderId } = useContext(CartContext);
    return (
        <>
            {orderId === undefined ? (

                <div >
                    <div className="position-absolute top-50 start-50 translate-middle" ><Spinner animation="border" role="status" /></div>
                </div>
            ) : (
                <div className="d-flex flex-column align-items-center">
                    <h1 className="purchase_element">Gracias por tu compra!</h1>
                    <hr className="separador text-dark purchase_element"></hr>
                    <h4 className="purchase_element">Tu codigo de compra es:</h4>
                    <h3 className="purchase_element">{orderId}</h3>
                    <hr className="separador text-dark "></hr>
                    <Link to="/"><button className="btn btn-primary">Inicio</button></Link>
                </div>
            )}

        </>
    );
}

export default CartPurchase;