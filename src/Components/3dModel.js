import "../styles/Home.css";

const Modelo = (props) => {
    return(
        <model-viewer id="gramo" camera-controls allow="autoplay" autoplay src="assets/scene3.glb" ar
        ar-modes="webxr scene-viewer quick-look" alt="">
      </model-viewer>
    );
}

export default Modelo;