import React from "react";
import "../styles/Productos.css";

const ProductList = (props)=>{
    const {name, description, image, price} = props;

    return(
            <div className="product-list">
            <h2>{name}</h2>
            <img src={image} alt="" />
            <div className="prod_desc" dangerouslySetInnerHTML={{__html: description}}></div>
            <span className="filler"></span>
            <span className="prod_price">$ {price}</span>
            <button type="">Comprar</button>
            </div>
    );
}



export default ProductList;