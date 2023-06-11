import Style from "./Forms.module.css";
import React, { useState } from "react";
import validation from "./validation";
import { preventOverflow } from "@popperjs/core";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User Name:</label>
      <input
        type="text"
        name="userName"
        placeholder="Type your User Name..."
        value={userData.userName}
        onChange={handleInputChange}
      />
      {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}
      <label>Password:</label>
      <input
        type="text"
        name="password"
        placeholder="Type your Password..."
        value={userData.password}
        onChange={handleInputChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Forms;
