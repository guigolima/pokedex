export interface ApiListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiListItem[];
}

export interface PokemonDetailResponse {
    id: number;
    name: string;
}