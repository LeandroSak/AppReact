import { useState} from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";


const SearchOrder = () => {
    const [orderId, setId] = useState();
    const [order, setOrder] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const itemDoc = doc(db, "orders", orderId);
        getDoc(itemDoc).then((snapshot) => {
            setOrder({ ...snapshot.data(), id: snapshot.id });
            console.log(order);
        })
    }

    return (<>
        {order === undefined ? (
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className=" text-center">
                    <div className="mb-3">
                        <label className="form-label">Codigo de compra</label>
                        <input type="text" className="form-control" onChange={event => setId(event.target.value)} />
                    </div>
                    <input type="submit" value="Comprar" className="btn btn-primary" />
                </form>
            </div>
        ) : (
            <div className="container ">
                <div className=" d-flex flex-column align-items-center">
                    <h3 >Codigo de compra: {order.id}</h3>
                    <hr className="separador text-dark "></hr>
                    <h3>Nombre del comprador: {order.buyer.name}</h3>
                    <hr className="separador text-dark"></hr>
                    <h3>Fecha de compra: {order.time}</h3>
                    <hr className="separador text-dark"></hr>
                    <h3>Productos</h3>
                    
                </div>
                <div className="container">
                    <table className="table table-striped  align-middle table-bordered">
                        
                        <tbody className="tbody" style={{ fontSize: "25px" }}>
                            {order.items.map((element) => (
                                <tr >
                                    <td>
                                        <img src={element.image} style={{ width: "9rem" }} alt="..." />
                                        {element.title}
                                    </td>
                                    <td >${element.price}</td>
                                    <td >
                                        {element.amount}
                                    </td>
                                    <td>${element.amount * element.price}
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="text-center">
                    
                        <Link to="/"><button  className="btn btn-primary">Inicio</button></Link>
                    </div>
            </div>

        )}



    </>);
}

export default SearchOrder;