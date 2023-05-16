import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import style from "./App.module.css";
import Nav from './components/Nav';
import React, { useState, useEffect } from 'react';

// import NavBar from './components/NavBar';
function App() {
  const [characters, setCharacters] = useState([]);
  const example = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
       name: 'Earth (C-137)',
       url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
 };
 
  const onSearch = () => {
    setCharacters([...characters, example])
  };
   return (
      <div className={style.App}>
        {/* <NavBar>
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </NavBar> */}
         <Nav onSearch={onSearch}/>
         <Cards className="Card" characters={characters} />
         {/* <Card className="card"
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
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
