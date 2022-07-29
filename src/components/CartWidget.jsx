import carrito from "../img/carrito.png"
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";


const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
    return (
      
        <div >
          <a className="text-decoration-none text-dark" href="#">
          {cartItems.length}
          </a>
          <img style={{ width: 25 }} src={carrito} />
        </div>
    );
  };
  
  export default CartWidget;