export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonStatsPanelProps {
  stats: Stat[];
  pokemonType: string;
  primaryTypeColor: string;
}