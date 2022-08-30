import React from "react";
import "../styles/Music_player.css"
const useState = React.useState;



// const songID = function(evt, selected){
        
//     let target = evt.target.closest(".cancion");
//     target = target.getAttribute("id");
//     console.log(target)

//     switch(target){
//         case "cancion1":
//             selected = 1;
//             break;

//         case "cancion2":
//             selected = 2;
//             break;

//         case "cancion3":
//             selected = 3;
//             break;

//         case "cancion4":
//             selected = 4;
//             break;        

//             default: 
//             selected = "no seleccionada";
//             break;
//     }

    
// }



const SongPicker = (props) => {

    const [activo, setActivo] = useState(true);
    
    let expandir = activo ? "shrink" : "expanded";
    let iconoCont = activo ? "radioCont_shrink" : "radioCont_exp";
    let iconoRadio = activo ? "iconshrink" : "iconexp";

    
    
    return (
        <section className={expandir} id="cancionesCont">

            <div className={iconoCont} >
                <i className='bx bxs-radio' id={iconoRadio} onClick={()=> setActivo(!activo)}></i>   
            </div>
            
            <article className={activo ? "oculto" : "oculto show"}>

                <div className="borde">
                    <div className="cancion" id="cancion1" onClick={props.songSelector}>
                        <img src="assets/portadas/Billie.png" alt="Billie Holiday cover" className="foto-artista" />
                        <div className="info-cancion">
                            <p className="titulo">Night and Day</p>
                            <p className="artista">Billie Holiday</p>
                        </div>
                    </div>
                </div>

                <div className="borde">
                    <div className="cancion" id="cancion2" onClick={props.songSelector}>
                        <img src="assets/portadas/AndrewSisters.png" alt="The Andrews Sisters" className="foto-artista" />
                        <div className="info-cancion">
                            <p className="titulo">Bei Mir Bist Du Schön</p>
                            <p className="artista">The Andrews Sisters</p>
                        </div>
                    </div>
                </div>

                <div className="borde">
                    <div className="cancion" id="cancion3" onClick={props.songSelector}>
                        <img src="assets/portadas/Bobby.png" alt="Bobby Darin Cover" className="foto-artista" />
                        <div className="info-cancion">
                            <p className="titulo">Beyond the Sea</p>
                            <p className="artista">Bobby Darin</p>
                        </div>
                    </div>
                </div>

                <div className="borde">
                    <div className="cancion" id="cancion4" onClick={props.songSelector}>
                        <img src="assets/portadas/Ella.png" alt="Ella Fitzgerald cover" className="foto-artista" />
                        <div className="info-cancion">
                            <p className="titulo">Baby, It's Cold Outside</p>
                            <p className="artista">Ella Fitzgerald & Louis Armstrong</p>
                        </div>
                    </div>
                </div>
            </article>


        </section>
    );
}


export default SongPicker;
