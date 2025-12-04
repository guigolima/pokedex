export interface PokemonState {
  list: Pokemon[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export interface UserCollectionState {
  pokemonIds: number[];
}

export interface RootState {
  pokemon: PokemonState;
  favorites: UserCollectionState;
  team: UserCollectionState;
}