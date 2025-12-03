import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/templates/MainLayout";
import { SearchBar } from "../components/molecules/SearchBar";
import { PokemonGrid } from "../components/organisms/PokemonGrid";
import { getPokemonList } from "../api/requests";
import { dummyPokemons } from "../mocks/mockPokemonList";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPokemons = dummyPokemons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePokemonClick = (id: number) => {
    console.log(`Maps to details for ID: ${id}`);
  };

  useEffect(() => {
    getPokemonList().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <MainLayout>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <PokemonGrid
        pokemons={filteredPokemons}
        isLoading={false}
        onPokemonClick={handlePokemonClick}
      />
    </MainLayout>
  );
};

export default App;
