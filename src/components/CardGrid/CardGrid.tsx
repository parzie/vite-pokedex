import { FC } from 'react';
import Card from '../Card/PokemonCard';
import Loader from '../Loader/Loader';
import './CardGrid.scss'

import { POKEMONS_QUERY } from '../../graphql/queries/Pokemon';
import { useQuery } from '@apollo/client';
import { Pokemon } from '../../types';


interface CardGridProps {
  searchValue: string,
  limit: number
}

const LIMIT = 100;

const CardGrid: FC<CardGridProps> = ({ searchValue, limit = LIMIT }): JSX.Element => {

  const { loading, error, data } = useQuery(POKEMONS_QUERY, {
    variables: { limit, name: searchValue },
  });

  console.log("data: ", data);



  if (error) return <p className='center'>Error: {error.message} </p>

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="card-grid">
      {
        data?.pokemon_v2_pokemon.map((pokemon: Pokemon) => {
            return <Card pokemon={pokemon} key={pokemon.id} onClick={() => console.log(pokemon)} />
        })
      }

    </div>
  );
}

export default CardGrid;
