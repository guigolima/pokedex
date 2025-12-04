export interface PokemonGridProps {
  pokemons: Pokemon[];
  onPokemonClick: (id: number) => void;
}