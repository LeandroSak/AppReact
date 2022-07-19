import { useState } from "react";

const ItemDetail = ({ item }) => {
    const { title, price, stock, image , category , description} = item;
    const [count, setCount] = useState(0);
    const updateCount = (operation) => {
        if (operation === "-" && count > 0) {
            setCount(count - 1);
        } else if (operation === "+" && count < stock) {
            setCount(count + 1);
        }
    };
    const addCart = () => {

    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 " style={{borderRight:"1px" ,borderRightStyle:"solid" ,borderRightColor:"#f6f6f6"}}>
                    <img style={{ width: "100%", height:"25rem"}} src={image} />
                </div>
                <div className="col-sm-5" style={{paddingTop:"20px"}} >

                    <h2 >{title}</h2>
                    <h5> {category} </h5>

                    <h6 className="title-price" style={{marginTop:"40px", marginBottom:"0px"}}><small>PRECIO</small></h6>
                    <h3 style={{marginTop:"0px"}}>$ {price}</h3>
                    <div className="section " style={{ background:"#f8f9f9", marginLeft:"-12px",paddingLeft:"15px", paddingRight:"15px", paddingBottom:"30px", paddingTop:"20px"}}>
                        <h6 className="title-attr"><small>CANTIDAD</small></h6>
                        <p className="">{`${stock} unidades disponibles`}</p>
                        <div className=" input-group" >
                            <button type="button" className="btn btn-secondary" onClick={() => updateCount("-")}>-</button>
                            <input value={count} style={{ width: "3rem" }} className="text-center" ></input>
                            <button type="button"  className="btn btn-secondary" onClick={() => updateCount("+")}>+</button>
                        </div>
                        <div style={{ marginTop: "5px" }}>
                            <button onClick={() => addCart()} type="button" className="btn btn-primary" style={{width:"100%", marginTop:"10px"}}>Agregar al carrito!</button>

                        </div>
                    </div>
                </div>
                <div className="col-sm-10 ">
                    <ul className="menu-items" style={{listStyleType:"none",fontSize:"20px", display:"inline-flex", marginBottom:"0px", marginTop:"20px"}}>
                        <li className="active">Descripcion del producto</li>
                    </ul>
                    <div style={{width:"100%", borderTop:"1px", borderTopStyle:"solid", borderTopColor:"silver"}}>
                        <p style={{padding:"15px"}} >
                            {description}
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;