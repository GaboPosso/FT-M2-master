import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName:'', 
    animals:[], 
    species:[], 
    allAnimals:[]});

    React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
   .then((res) => res.json())
   .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
     
    }, []);

    const handleInputChange = (e) => {setZoo({...zoo, zooName: e.target.value})}
    const handleSpecies = (e) => {
      setZoo({
        ...zoo, 
        animals: zoo.allAnimals.filter(animal => animal.specie === e.target.value)})}
    const handleAllSpecies =() => {setZoo({...zoo, animals: zoo.allAnimals})}
  return (
    <div className={styledZoo.divContent}>
      <label className={styledZoo.divContentTitle}>Zoo Name:
        <input value={zoo.zooName} onChange={handleInputChange}/>
        </label>
      <h1 className={styledZoo.title}>{zoo.zooName}</h1>

      <Species species={zoo.species}
        handleAllSpecies={handleAllSpecies}
        handleSpecies={handleSpecies}
      />

      <Animals animals={zoo.animals}/>
    </div>
  );
}
