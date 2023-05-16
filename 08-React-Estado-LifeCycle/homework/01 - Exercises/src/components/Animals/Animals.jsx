import React from 'react';
import styledAnimals from './Animals.module.css';


export default class Animals extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className={styledAnimals.container}>
      {
        this.props.animals.map((animal, index) => {
          return(
            <div className={styledAnimals.containerAnimals} key={index}>
              <h5>{animal.name}</h5>
              <img src={animal.image} alt={animal.name} width='300px'/>
              <br/>
              <span>{animal.specie}</span>
            </div>
          )
        })
      }
    </div>
    )
  }
}
