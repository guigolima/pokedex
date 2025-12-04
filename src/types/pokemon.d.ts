export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

interface NestedUrl {
  name: string;
  url: string;
}

interface Ability {
  ability: INestedUrl;
  is_hidden: boolean;
  slot: number;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: INestedUrl;
}

interface Type {
  slot: number;
  type: INestedUrl;
}

interface Sprites {
  front_default: string | null;
  back_default: string | null;
  other?: {
    "official-artwork"?: {
      front_default?: string | null;
      front_shiny?: string | null;
    };
    dream_world?: {
      front_default?: string | null;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  abilities: Ability[];
  stats: Stat[];
  types: Type[];
  sprites: Sprites;
  moves: any[];
  species: NestedUrl;
}