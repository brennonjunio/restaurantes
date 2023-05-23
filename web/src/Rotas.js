import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Rotas;
