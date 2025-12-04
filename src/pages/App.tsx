import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/templates/MainLayout";
import { SearchBar } from "../components/molecules/SearchBar";
import { PokemonGrid } from "../components/organisms/PokemonGrid";
import { LoadingOverlay } from "../components/molecules/LoadingOverlay";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList, fetchNextPage } from "../redux/slices/pokemonSlice";
import { RootState, AppDispatch } from "../redux/store";
import LoadMoreButton from "../components/atoms/LoadMoreButton";
import { Pokemon } from "../types/pokemon";
import PokemonDetailsModal from "../components/molecules/PokemonDetailsModal";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const { list, loading, hasMore } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const handlePokemonClick = (id: number) => {
    const pokemon = list.find((p) => p.id === id);
    if (pokemon) {
      setSelectedPokemon(pokemon);
    }
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  const handleLoadMore = () => {
    dispatch(fetchNextPage());
  };

  return (
    <MainLayout>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <PokemonGrid pokemons={list} onPokemonClick={handlePokemonClick} />
      {hasMore && (
        <LoadMoreButton handleLoadMore={handleLoadMore} loading={loading} />
      )}
      <LoadingOverlay isOpen={loading === "pending"} />
      <PokemonDetailsModal
        open={!!selectedPokemon}
        pokemon={selectedPokemon}
        onClose={handleCloseModal}
      />
    </MainLayout>
  );
};

export default App;
