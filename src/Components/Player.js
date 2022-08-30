import { useState, useRef, useEffect } from "react";
import "../styles/Music_player.css";


const Player = (props) => {

   let seleccionada = props.cancion;
  

    let cancionesList = [
        {
            nombre: "Night and Day",
            artista: "Billie Holiday",
            fuente: "assets/NigthDay.mp3"
        },
        {
            nombre: "Bei Mir Bist Du Schön",
            artista: "The Andrews Sisters",
            fuente: "assets/BeiMir.mp3"
        },
        {
            nombre: "Beyond the Sea",
            artista: "Bobby Darin",
            fuente: "assets/BeyondSea.mp3"
        },
        {
            nombre: "Baby, It's Cold Outside",
            artista: "Fitzgerald & Armstrong",
            fuente: "assets/ColdOutside.mp3"
        }];

    
     
//    let objeto = cancionesList[props.cancion - 1 ];

    // State
    const [isPlaying, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // Referencias
    const repro = useRef();
    const progressBar = useRef();
    const animationRef = useRef();



    // Esto nos devuelve la duración en segundos totales
    useEffect(() => {
        const duracionEnSeg = Math.floor(repro.current.duration);
        setDuration(duracionEnSeg);
        progressBar.current.max = duracionEnSeg;
    }, [repro?.current?.loadedMetaData, repro?.current?.readyState]
    );


    // Función para formatear el tiempo
    const formatearHora = (segs) => {
        const minutos = Math.floor(segs / 60);
        const returnMinutos = minutos < 10 ? ` 0${minutos}` : `${minutos}`;
        const segundos = Math.floor(segs % 60);
        const returnSegundos = segundos < 10 ? `0${segundos}` : `${segundos}`;

        return `${returnMinutos}:${returnSegundos}`
    }

    // Play pause 
    const togglePlay = () => {
        const valorAnterior = isPlaying;

        setPlaying(!valorAnterior);

        if (!valorAnterior) {
            repro.current.play();
            animationRef.current = requestAnimationFrame(whilePlay);
        } else {
            repro.current.pause();
            cancelAnimationFrame(animationRef.current)
        }
    }

    // actualizar el boton mientras se reproduce 
    const whilePlay = () => {
        progressBar.current.value = repro.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlay);

    }

    // Cambiar el rango de la barra cuando se reproduce la canción
    const changeRange = () => {
        repro.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty("--seek-before-width", `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    return (
        <div className="player">

            <audio ref={repro} src={cancionesList[seleccionada - 1 ].fuente}>

            </audio>

            <div className="details">
                <div className="reproduciendo"> Estas escuchando: </div>
                <div className="nombre-cancion"> {cancionesList[seleccionada - 1].nombre}</div>
                <span> - </span>
                <div className="artista">{cancionesList[seleccionada - 1].artista}</div>
            </div>

            <div className="botones-cont">
                <button className="botones" onClick={togglePlay}>
                    {isPlaying ? <i className='bx bx-pause' id="pause"></i> : <i className='bx bx-play' id="play"></i>}
                </button>
            </div>


            <div className="slider_container">
                <div className="time-count">
                    {/* Contador tiempo transcurrido */}
                    <div className="current-time"> {formatearHora(currentTime)}</div>
                    {/* Progress bar */}
                    <input type="range" className="progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />
                    {/* A este elemento le pasamos la función formatear hora que recibe la duración como parametro que la sacamos desde la metadata html */}
                    <div className="total">{((duration && !isNaN(duration)) && formatearHora(duration)) || "00:00" }</div>
                </div>
            </div>




        </div>

    );
}

export default Player;