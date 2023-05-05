export default function Card({name, status, species, gender, origin, image, onClose}) {
  // const {name, status, species, gender, origin, image} = props
   return (
     <div>
         <img src={image} alt={name} />
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <button onClick={onClose}>X</button>
      </div>
   );
}
