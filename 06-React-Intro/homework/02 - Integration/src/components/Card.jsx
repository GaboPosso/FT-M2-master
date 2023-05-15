
export default function Card({name, status, species, gender, origin, image, onClose}) {
  // const {name, status, species, gender, origin, image} = props
   return (
     <div className='Cards'>
      <div className='face front'>
        <img src={image} alt=""/>
      </div>

      <div className='face back'>
          
          <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin}</p>
          <button onClick={onClose}>X</button>
      </div>
      </div>
   );
}
