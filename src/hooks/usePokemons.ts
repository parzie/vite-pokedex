import { useQuery } from "@apollo/client";
import { POKEMONS_QUERY } from "../graphql/queries/Pokemon";
import { useEffect, useState } from "react";
import { Pokemon } from "../types";


export default function usePokemons({ limit, searchValue }: { limit: number, searchValue: string }) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(0)

  const { loading, error, data } = useQuery(POKEMONS_QUERY, {
    variables: { limit, offset: limit * page, name: searchValue },
  });

  useEffect(() => {
    setPokemonList([]);
    setPage(0);
  }, [searchValue])

  useEffect(() => {
    if (data?.pokemon_v2_pokemon) {
      if (page === 0) {
        setPokemonList(data?.pokemon_v2_pokemon);
      } else {
        setPokemonList(pokemonList.concat(data?.pokemon_v2_pokemon));
      }
    }
  }, [data])


  function fetchNextPage() {
    setPage(prevPage => prevPage + 1);
  }

  return { loading, error, pokemonList, fetchNextPage }
}