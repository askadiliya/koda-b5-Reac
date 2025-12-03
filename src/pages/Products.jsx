import ShowProducts from "../components/ShowProducts";
import AddProduct from "../components/AddProduct";
import ShowProduct from "../components/ShowProducts";
import { useState } from "react";
import Navigasi from "../components/Navigasi";
// import "../styles/App.css";

function Products() {
  const [products, setProducts] = useState([
    { name: "Tumbler", qty: 50, price: 300000, status: "Available" },
  ]);

  return (
    <div>
      <Navigasi/>
      <main className="flex min-h-[85vh] p-5">
        <ShowProducts products={products} />
        <AddProduct changeProducts={setProducts} />
      </main>
    </div>
  );
}

export default Products;
