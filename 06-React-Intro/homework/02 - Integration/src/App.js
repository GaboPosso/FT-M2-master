import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';
import style from "./App.module.css";
import NavBar from './components/NavBar';
function App() {
   return (
      <div className={style.App}>
        <NavBar>
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </NavBar>
         
         <Cards className="Card" characters={characters} />
         <Card className="card"
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}

export default App;
