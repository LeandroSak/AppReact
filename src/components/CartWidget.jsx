import carrito from "../img/carrito.png"
const CartWidget = () => {
    return (
        <div >
          <a className="text-decoration-none text-dark" href="#">
            0
          </a>
          <img style={{ width: 25 }} src={carrito} />
        </div>
    );
  };
  
  export default CartWidget;