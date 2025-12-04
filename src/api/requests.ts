import { PokemonListResponse } from "../types/pokemon";
import axiosClient from "./api";

export const getPokemonList = async (): Promise<PokemonListResponse> => {
  try {
    const response = await axiosClient.get<PokemonListResponse>("pokemon");
    return response as unknown as PokemonListResponse;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetails = async (
  nameOrId: string | number
): Promise<any> => {
  try {
    const response = await axiosClient.get<any>(`pokemon/${nameOrId}`);
    return response as unknown as any;
  } catch (error) {
    throw error;
  }
};
