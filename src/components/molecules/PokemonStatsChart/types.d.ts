export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonStatsChartProps {
  stats: Stat[];
  pokemonType?: string;
}
