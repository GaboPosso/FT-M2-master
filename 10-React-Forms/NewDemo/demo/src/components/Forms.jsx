import React, { useState } from "react";

const Forms = () => {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });
  

  const handleFormsChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForms({
      [name]: value
    })
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <h1>Soy el primer form</h1>
        <label htmlFor="email"> Email</label>
        <input
          value={forms.email}
          type="text"
          placeholder="Type your email"
          name="email"
          onChange={handleFormsChange}
        />
        <hr />
        <label htmlFor="password">Password</label>
        <input
          value={forms.password}
          type="text"
          placeholder="Password"
          name="password"
          onChange={handleFormsChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Forms;
