import { Link } from "react-router-dom";

const CartPurchase = (id) => {
    return (
        <>
            <div className="text-center">
                <h2>Gracias por tu compra</h2>
                <h4>Tu codigo de compra es {id}</h4>
                <Link to="/">Inicio</Link>
            </div>
        </>
    );
}

export default CartPurchase;