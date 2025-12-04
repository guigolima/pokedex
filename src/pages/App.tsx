import React, { useEffect, useState, useMemo } from "react";
import { MainLayout } from "../components/templates/MainLayout";
import { SearchBar } from "../components/molecules/SearchBar";
import { PokemonGrid } from "../components/organisms/PokemonGrid";
import { FavoriteGrid } from "../components/organisms/FavoriteGrid";
import ComparisonView from "../components/organisms/ComparisonView";
import { LoadingOverlay } from "../components/molecules/LoadingOverlay";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonList,
  fetchNextPage,
  fetchPokemonByName,
} from "../redux/slices/pokemonSlice";
import { clearSelectedType } from "../redux/slices/typeSlice";
import { RootState, AppDispatch } from "../redux/store";
import LoadMoreButton from "../components/atoms/LoadMoreButton";
import { Pokemon } from "../types/pokemon";
import PokemonDetailsModal from "../components/molecules/PokemonDetailsModal";
import PokemonTypeGrid from "../components/organisms/PokemonTypeGrid";
import useDebounce from "../hooks/useDebounce";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const { list, loading, hasMore } = useSelector(
    (state: RootState) => state.pokemon
  );

  const selectedType = useSelector(
    (state: RootState) => state.types.selectedType
  );

  const debouncedSearch = useDebounce(searchTerm, 500);

  const filteredList = useMemo(() => {
    let res = list;
    if (selectedType) {
      res = res.filter((pokemon) =>
        pokemon.types?.some((type) => type.type?.name === selectedType)
      );
    }
    return res;
  }, [list, selectedType]);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  useEffect(() => {
    const q = debouncedSearch?.trim();
    if (q && q.length > 0) {
      dispatch(clearSelectedType());
      dispatch(fetchPokemonByName(q));
    } else {
      dispatch(fetchPokemonList());
    }
  }, [debouncedSearch, dispatch]);

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

  const handleTabChange = (_e: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <MainLayout currentTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === 0 && (
        <>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <PokemonTypeGrid onTypeSelect={() => setSearchTerm("")} />
          <PokemonGrid
            pokemons={filteredList}
            onPokemonClick={handlePokemonClick}
          />
          {!selectedType && !debouncedSearch && hasMore && (
            <LoadMoreButton handleLoadMore={handleLoadMore} loading={loading} />
          )}
        </>
      )}

      {activeTab === 1 && <FavoriteGrid onPokemonClick={handlePokemonClick} />}
      {activeTab === 2 && <ComparisonView />}
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
