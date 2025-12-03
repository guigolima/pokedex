export interface PokemonGridProps {
  pokemons: PokemonSummary[];
  isLoading: boolean;
  onPokemonClick: (id: number) => void;
}