import { CartContext } from "../contexts/CartContext";
import { useState, useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { Link, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const Cart = () => {
    const { cartItems, removeItem, clear, sendOrder } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [confirmacion, setConfirmacion] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let mail1 = document.getElementById("id1");
        let mail2 = document.getElementById("id2");
        if (mail1.value === mail2.value) {
            const inputs = document.getElementsByClassName("data");
            const time = new Date().toLocaleString();
            const data = Array.from(inputs).map((input, index) => input.value);
            sendOrder(totalPrice, { name: data[0], mail: data[1], DNI: data[2], phone: data[3] }, time);
            navigate("/cartpunchase");
        } else {
            setConfirmacion("error");
        }


    }
    useEffect(() => {
        setLoading(true);
        let total = 0;
        cartItems.forEach((item) => {
            total = total + (item.price * item.amount);
        });
        setTotalPrice(total);
        setLoading(false);
    }, [cartItems]);

    return (
        <>
            {loading === true ? (

                <div >
                    <div className="position-absolute top-50 start-50 translate-middle" ><Spinner animation="border" role="status" /></div>
                </div>
            ) : (
                <>
                    {cartItems.length === 0 ? (
                        <>
                            <div className="text-center">
                                <h3>No hay items! Agrega algunos</h3>
                                <Link to="/"><button  className="btn btn-primary">Inicio</button></Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="container">
                                <h2 className="text-center ">Carrito</h2>
                                <table className="table table-striped  align-middle table-bordered">

                                    <tbody className="tbody" style={{ fontSize: "25px" }}>
                                        {cartItems.map((element) => (
                                            <tr>
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
                            <div>
                                
                            </div>
                            <div className="d-flex justify-content-center container div_formulario">
                                <form onSubmit={handleSubmit} className=" text-center formulario">
                                    <div className="mb-3 ">
                                        <label className="form-label">Nombre</label>
                                        <input type="text" className="form-control data" />

                                    </div>

                                    <div className="mb-3" >
                                        <label className="form-label">Email</label>
                                        <input id="id1" type="email" className="form-control data" />

                                    </div>
                                    <div className="mb-3" >
                                        <label className="form-label">Confirmar Email</label>
                                        <input id="id2" type="email" className="form-control" />

                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">DNI</label>
                                        <input type="number" className="form-control data" required onInput={(e) => e.target.value = e.target.value.slice(0, 8)} />

                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Telefono</label>
                                        <input type="tel" className="form-control data" required maxLength={10} minLength={10}/>

                                    </div>
                                    <button type="submit" className="btn btn-primary">Comprar</button>
                                </form>
                            </div>
                            <>
                                {confirmacion === "error" ? (
                                    <div className="text-center">
                                        <h4 className="incorrecto">Confirmacion de email incorrecta, asegurece que los 2 email sean iguales!</h4>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </>
                        </>
                    )}
                </>
            )}




        </>
    );
}

export default Cart;