export type PokemonType = {
  id: number,
  name: string,
}

export type PokemonImages = {
  front_shiny: number,
  front_default: string,
}

export type Pokemon = {
  id: number,
  name: string,
  types: PokemonType[],
  images: PokemonImages[]
}