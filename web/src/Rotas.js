import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Restaurantes from "./Pages/Restaurantes";
import Sobre from "./Pages/Sobre";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/restaurantes" element={<Restaurantes />}></Route>
      <Route path="/sobre" element={<Sobre />}></Route>
    </Routes>
  );
};

export default Rotas;
