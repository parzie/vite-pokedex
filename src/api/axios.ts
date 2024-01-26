import axios from "axios";
import { PokemonData, PokemonList } from "../Interface";

const BASE_URL = 'https://pokeapi.co/api/v2/';

const dataCacheMap: Map<string, PokemonList | PokemonData> = new Map();

export const api = axios.create({
  baseURL: BASE_URL
})

// Make a GET request to 'PokeAPI'.
const get = async (endpoint: string, options = {}) => {
  if (!dataCacheMap.has(endpoint)) {
    const { data } = await api.get<PokemonList | PokemonData>(BASE_URL + endpoint, options);

    dataCacheMap.set(endpoint, data);
  }

  return dataCacheMap.get(endpoint);
};

// Fetch all pokemons.
export const getPokemons = (limit=10000, offset=0) => {
  return get(`pokemon?limit=${limit}&offset=${offset}`) as Promise<PokemonList>;
};

// Fetch specific pokemon data.
export const getPokemonData = (pokemonName: string)  => {
  return get(`pokemon/${pokemonName}`) as Promise<PokemonData>;
};

