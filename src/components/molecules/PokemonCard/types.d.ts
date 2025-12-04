export interface PokemonCardProps {
  pokemon: Pokemon;
  isInTeam?: boolean;
  onPokemonClick: (id: number) => void;
  onToggleTeam?: (pokemon: Pokemon) => void;
}
