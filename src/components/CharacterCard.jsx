export default function CharacterCard({ item }) {
  return (
    <div className="shadow-lg rounded-lg p-4 border hover:scale-105 duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="rounded-md w-full"
      />

      <h2 className="text-xl font-bold mt-3">{item.name}</h2>
      <p>Status: {item.status}</p>
      <p>Species: {item.species}</p>
    </div>
  );
}
