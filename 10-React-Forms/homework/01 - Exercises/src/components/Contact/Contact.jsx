import React, { useState } from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(input) {
  const errors = {};
  if (!input.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!regexEmail.test(input.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  return errors;
}
export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInput({
      ...input,
      [name]: value,
    });  

    setErrors(validate({
      ...input,
        [event.target.name]: errors.target.value,
    }))
  };

  


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!Object.values(errors).length){
      alert("Datos Completos")
      setInput({
        name: '',
        email: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        message: ''
      })
    } else {
      alert('Debe llenar todos los campos');
    }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          className={errors.name && "warning"}
          name="name"
          placeholder="Enter your Name..."
          type="text"
          value={input.name}
          onChange={handleChange}
        />
        {errors.name && <p className="danger">{errors.name}</p>}
        <label>Correo Electrónico:</label>
        <input
          className={errors.email && "warning"}
          name="email"
          placeholder="Enter your Email..."
          type="text"
          value={input.email}
          onChange={handleChange}
        />{errors.email && <p className="danger">{errors.email}</p>}         
        <label>Mensaje:</label>
        <input
          name="message"
          placeholder="Escribe un mensaje..."
          type="text"
          value={input.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
