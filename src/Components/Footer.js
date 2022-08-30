
import "../styles/Footer.css";
import Player from "../Components/Player";

const Footer = (props)=>{

    return(  
        <section className="footer">
             <Player cancion={props.cancion}></Player>
            <div className="cont-sociales">
                <p>Sitio creado por - 
                 <a href="https://matiasfianini.github.io" target="_BLANK" rel="noreferrer"> Matias Fianini</a>
                </p>
            </div>
        </section>
      );
}

export default Footer;