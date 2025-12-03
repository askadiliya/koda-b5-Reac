import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filtered, setFiltered] = useState([]);

  
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const getCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
      setFiltered(data.results);
    } catch (error) {
      console.log("Error fetch data:", error);
    }
  };

  
  useEffect(() => {
    let result = characters;

    if (search.trim() !== "") {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== "") {
      result = result.filter((item) => item.status === status);
    }

    setFiltered(result);
  }, [search, status, characters]);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">Filter Characters</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">

        <input
          type="text"
          placeholder="Search character name..."
          className="border p-3 rounded-lg w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg w-full sm:w-48"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <CharacterCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
