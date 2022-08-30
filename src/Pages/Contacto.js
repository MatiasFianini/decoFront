import "../styles/Contacto.css"
import { useState } from "react";
import axios from "axios";

const Contacto = (props) => {

    const initialForm = {
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    };

    // STATES
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    const [formData, setFormData] = useState(initialForm);

    // Cambios en el formulario
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    // Envio al back
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg("");
        setSending(true);
        const response = await axios.post("http://localhost:3000/api/contacto", formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (
        <main>
            <h2>Contactar</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">

                <div className="form-items">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" required placeholder="Ingrese su nombre" value={formData.nombre} onChange={handleChange} />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Ingrese su correo" value={formData.email} onChange={handleChange} />
                    <br />
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" name="telefono" id="telefono" pattern="[0-9]{12}" placeholder="+54 11 12345678" value={formData.telefono} onChange={handleChange} />
                    <br />
                    <label htmlFor="mensaje">Comentario</label>
                    <textarea name="mensaje" id="mensaje" required placeholder="Ingrese su mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                </div>

                <button type="submit">Enviar</button>

            </form>
            <div className="mensajes">
                {sending ? <span className="msg-loading">Enviando mensaje...</span> : null}
                {msg ? <span className="mensaje-correcto">{msg}</span> : null} 
                

            </div>
        </main>

    );
}

export default Contacto;