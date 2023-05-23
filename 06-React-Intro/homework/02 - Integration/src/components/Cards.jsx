import Card from './Card';

export default function Cards({characters, onClose}) {
  
   return (
    <div>{
      characters.map(({id, name, image, status, species, gender, origin, onClose}) => {
        return(
          <Card
            key={id}
            image={image}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            onClose={onClose}
          />
        )
      })}
    </div>
   )
}
