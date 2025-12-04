import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/templates/MainLayout";
import { SearchBar } from "../components/molecules/SearchBar";
import { PokemonGrid } from "../components/organisms/PokemonGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../redux/slices/pokemonSlice";
import { RootState, AppDispatch } from "../redux/store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setSearchTerm] = useState("");
  
  const { list, loading, error } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const handlePokemonClick = (id: number) => {
    console.log(`Maps to details for ID: ${id}`);
  };

  return (
    <MainLayout>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {loading === "pending" && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <PokemonGrid
        pokemons={list}
        isLoading={loading === "pending"}
        onPokemonClick={handlePokemonClick}
      />
    </MainLayout>
  );
};

export default App;
