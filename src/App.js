import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import Footer from './Components/Footer';
import Header from './Components/Header';
import SongPicker from './Components/SongPick';



// Paginas
import Home from './Pages/Home';
import Contacto from './Pages/Contacto';
import Info from './Pages/Info';
import Products from './Pages/Products';
import { useState} from 'react';



function App() {

 
let [song, SetSong] = useState(1)

  const songID = function(evt){     
    let target = evt.target.closest(".cancion");
    target = target.getAttribute("id");
    
    

    switch(target){
        case "cancion1":
            SetSong(song = 1);
            break;

        case "cancion2":
          SetSong(song = 2);
            break;

        case "cancion3":
          SetSong(song = 3);
            break;

        case "cancion4":
          SetSong(song = 4);
            break;        

            default: 
            SetSong(song = 1);
            break;
    } 
    

    console.log(song);
   
}


  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='info' element={<Info />} />
          <Route path='products' element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer cancion={song} />
      <SongPicker songSelector={songID} />
    </div>
  );
}

export default App;
