import React from "react";
import "../styles/Home.css";
import Modelo from "../Components/3dModel"
const useState = React.useState;

const Home = (props) => {
const [enabled, setEnabled] = useState(true);

const iluminacion = enabled ? "apagado" : "prendido";
const lamp = enabled ? "assets/decor/apagada.png" : "assets/decor/prendida.png"; 
const halo = enabled ? "haloApagado" : "haloPrendido";


 return (   
    <main>
        <div className={iluminacion}> </div>
        <div className="escena">
            <div className="iluminacion">
                <img onClick={()=> setEnabled(!enabled)} src={lamp} alt="" id="lampara"  />
                
                <span className={halo}></span>
            </div>
            <Modelo />
        </div>
    </main>
    );
}

export default Home;