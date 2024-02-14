export type PokemonType = {
  pokemon_v2_type: {
    id: number,
    name: string,
  }
}

export type Pokemon = {
  id: number,
  name: string,
  pokemon_v2_pokemontypes: PokemonType[],
}