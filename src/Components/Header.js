import "../styles/Header.css"
import {Link} from "react-router-dom";


const Header = (props) => {
    return (
        <header>
            <h1>Deco Experience</h1>
            <nav>
                <ul>
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/contacto">Contacto</Link></li>
                    <li className="nav-item"><Link to="/info">Info</Link></li>
                    <li className="nav-item"><Link to="/products">Comprar</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;