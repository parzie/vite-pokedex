import { gql } from '@apollo/client';

const POKEMONS_QUERY = gql`
  query pokemons($name: String!, $limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(where: {name: {_regex: $name}}, limit: $limit, offset: $offset) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
    }
  }
`;

export { POKEMONS_QUERY };