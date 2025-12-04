import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/templates/MainLayout";
import { SearchBar } from "../components/molecules/SearchBar";
import { PokemonGrid } from "../components/organisms/PokemonGrid";
import { LoadingOverlay } from "../components/molecules/LoadingOverlay";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList, fetchNextPage } from "../redux/slices/pokemonSlice";
import { RootState, AppDispatch } from "../redux/store";
import LoadMoreButton from "../components/atoms/LoadMoreButton";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setSearchTerm] = useState("");

  const { list, loading, hasMore } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const handlePokemonClick = (id: number) => {
    console.log(`Maps to details for ID: ${id}`);
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
    </MainLayout>
  );
};

export default App;
