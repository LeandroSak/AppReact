import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item, removeItem }) => {
    const { id, title, price, amount, image } = item;
    const { addLocalStorage, cartItems } = useContext(CartContext);

    useEffect(() => {
        addLocalStorage();
    }, [cartItems]
    );
    return (
        <>
            <td>
                <img src={image} style={{ width: "9rem" }} alt="..." />
                {title}
            </td>
            <td >${price}</td>
            <td >
                {amount}
            </td>
            <td>${amount * price}
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => removeItem(item, id)}>X</button>
            </td>
        </>
    );
}

export default CartItem;