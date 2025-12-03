import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
// import Counter from "./pages/Counter";
import Products from "./pages/Products";
import Characters from "./pages/Characters";
import { BrowserRouter } from "react-router";
import Router from "./Router";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <Products /> */}
    {/* <Characters/> */}
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </StrictMode>
);
