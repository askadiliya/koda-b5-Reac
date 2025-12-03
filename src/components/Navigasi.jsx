import { Link } from "react-router";

function Navigasi() {
  return (
    <>
        <header className="p-5 h-[15vh] bg-amber-200 text-2xl font-bold select-none flex justify-between">
        <h1 className="font-sans font-black"> Aska </h1>
        <nav className="flex justify-center items-center">
          <ul className="flex gap-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/chararters"}>Characters</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navigasi
