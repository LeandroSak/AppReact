import carrito from "../img/carrito.png"
import { CartContext } from "../contexts/CartContext";
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from "react";


const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const [totalPrice, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.amount);
    });
    setTotalAmount(total);
  }, [cartItems]);

  return (
    <>

      <div >
        <Link to="/cart" className="text-decoration-none text-dark">{totalPrice}
          <img style={{ width: 25 }} src={carrito} />
        </Link>
      </div>

    </>
  );

};

export default CartWidget;