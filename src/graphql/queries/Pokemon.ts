import { gql } from '@apollo/client';

const POKEMONS_QUERY = gql`
  query pokemons($name: String!, $limit: Int!) {
    pokemon_v2_pokemon(where: {name: {_regex: $name}}, limit: $limit) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork")
      }
    }
  }
`;

export { POKEMONS_QUERY };