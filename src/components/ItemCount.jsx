import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0);

    const updateCount = (operation) => {
        if (operation === "-" && count > 0) {
            setCount(count - 1);
        } else if (operation === "+" && count < stock) {
            setCount(count + 1);
        }
    };
    const addCart = () => {
        alert("Se agregaron " + count + " al carrito");
    }
    return (
        <>
            <div className="d-flex justify-content-center input-group">
                <Button onClick={() => updateCount("-")}>-</Button>
                <p style={{fontSize:20, width:20, textAlign:"center"}}>{count}</p>
                <input type="number" value={count} ></input>
                <Button onClick={() => updateCount("+")}>+</Button>
                <Button onClick={() => addCart()} type="button" disabled={count === "" || count === 0}>Agregar al carrito!</Button>
           
            </div>
            

        </>
    );
};

export default ItemCount;