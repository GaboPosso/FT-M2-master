import React from "react";
import { Route, Routes} from 'react-router-dom';
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Discounts from "./components/Discounts/Discounts.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import Promotions from "./components/Discounts/Discounts.jsx";
/* eslint-disable */

export default function App() {
  return (
  <div>
    <NavBar/> 
    <Routes>
      <Route path="/" Component={<Home/>} />
      <Route path="/shipping" Component={<Shipping/>} />
      <Route path="/discounts" Component={<Discounts/>} />
      <Route path="/promotions" Component={<Promotions/>} /> 
      <Route path="/cruises/:id" Component={<CardDetail/>} />

    </Routes>
  </div>);
}
