import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const  {id}  = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div>
      <img src={character.image && character.image} alt={character.id}/>
      <h1>Name |{character.name && character.name}</h1>
      <h2>Status | {character.status && character.status}</h2>
      <h2>Species | {character.species && character.species}</h2>
      <h2>Gender | {character.gender && character.gender} </h2>
      <h2>Origin | {character.origin?.name && character?.origin.name} </h2>
    </div>
      
  );
};

export default Detail;
