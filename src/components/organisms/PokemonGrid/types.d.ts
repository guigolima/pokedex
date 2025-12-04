export interface PokemonGridProps {
  pokemons: Pokemon[];
  isLoading: boolean;
  onPokemonClick: (id: number) => void;
}