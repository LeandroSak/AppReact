import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext} from "react";
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
                <div className="text-center">
                <h2>Gracias por tu compra</h2>
                <h4>Tu codigo de compra es:</h4>
                <h4>{orderId}</h4>
                <Link to="/">Inicio</Link>
            </div>
            )}
            
        </>
    );
}

export default CartPurchase;