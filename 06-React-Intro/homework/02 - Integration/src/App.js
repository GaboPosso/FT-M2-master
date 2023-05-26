import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import style from "./App.module.css";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
// import NavBar from './components/NavBar';
import About from "./components/About";
import Detail from "./components/Detail";

const example = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };
  return (
    <div className={style.App}>
     <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={ <Cards className="Card" characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {/* <NavBar>
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </NavBar> */}
     
     
      {/* <Card className="card"
            id={Rick.id}
            name={Rick.name}
            status={Rick.stat</Link>us}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
    </div>
  );
}

export default App;
