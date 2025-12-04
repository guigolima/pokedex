import axiosClient from "./api";

export const getPokemonList = async (
  offset: number = 0,
  limit: number = 12
): Promise<any> => {
  try {
    const response = await axiosClient.get<any>(
      `pokemon?offset=${offset}&limit=${limit}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetails = async (
  nameOrId: string | number
): Promise<any> => {
  try {
    const response = await axiosClient.get<any>(`pokemon/${nameOrId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPokemonTypes = async (): Promise<any> => {
  try {
    const response = await axiosClient.get<any>(`type`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPokemonsByType = async (type: string): Promise<any> => {
  try {
    const response = await axiosClient.get<any>(`type/${type}`);
    return response;
  } catch (error) {
    throw error;
  }
};
