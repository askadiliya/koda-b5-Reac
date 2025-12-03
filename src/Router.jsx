import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Products from "./pages/Products";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default Router;
