import { PokemonDetailResponse, PokemonListResponse } from "../types/api";
import axiosClient from "./api";

export const getPokemonList = () => {
  return axiosClient<PokemonListResponse>("pokemon");
};

export const getPokemonDetails = (nameOrId: string | number) => {
  return axiosClient<PokemonDetailResponse>(`pokemon/${nameOrId}`);
};
