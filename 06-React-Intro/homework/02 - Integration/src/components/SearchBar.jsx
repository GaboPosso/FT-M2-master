import style from './SearchBar.module.css';
import React, { useState, useEffect } from 'react';



const SearchBar = ({onSearch}) => {
  const [id, setId] = useState('');


  const handleChange = (e) => {
    setId(e.target.value)
  };

   return (
      <div className={style.container}>
         <input type='search' onChange={handleChange}/>
         <button onClick={()=> {onSearch(id)}}>Agregar</button>
      </div>
   );
}
export default SearchBar;