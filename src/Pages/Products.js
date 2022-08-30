import "../styles/Secundarias.css";
import "../styles/Productos.css"
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../Components/Productos";


const Products = (props)=>{
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    
    useEffect(()=>{
        const cargarProductos = async ()=>{
            setLoading(true);

            const response = await axios.get("http://localhost:3000/api/productos");
            setProductos(response.data);
            console.log(response.data);
            setLoading(false);
        }

        cargarProductos();
    }, []);

    return(
        <section className="Wrap wrap-products">
            <h2>Tienda</h2>
            <div className="product-grid">
                 {loading ? <p className="product-loading">Cargando Productos</p> : productos.map (item => 
                <ProductList key={item.id} name={item.nombre} description={item.descripcion} price={item.precio} image={item.image} />)}
            </div>
           
        </section>
        
    );
}

export default Products;