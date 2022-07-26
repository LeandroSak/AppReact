import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock , onAdd}) => {
    const [count, setCount] = useState(0);
   
    const updateCount = (operation) => {
        if (operation === "-" && count > 0) {
            setCount(count - 1);
        } else if (operation === "+" && count < stock) {
            setCount(count + 1);
        }
    };
    
    return (
        <>
            
                <div>
                    <div className=" input-group" >
                        <button type="button" className="btn btn-secondary" onClick={() => updateCount("-")}>-</button>
                        <input value={count} style={{ width: "3rem" }} className="text-center" onChange={updateCount} ></input>
                        <button type="button" className="btn btn-secondary" onClick={() => updateCount("+")}>+</button>
                    </div>
                    <div style={{ marginTop: "5px" }}>
                        <button onClick={() => onAdd(count)} type="button" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }} disabled={count < 1}>Agregar al carrito!</button>
                    </div>
                </div>
            


        </>
    );
};

export default ItemCount;