import { FC, useRef } from 'react';
import PokemonCard from '../Card/PokemonCard';
import Loader from '../Loader/Loader';
import { Pokemon } from '../../types';
import usePokemons from '../../hooks/usePokemons';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './CardGrid.scss'


interface CardGridProps {
  searchValue: string,
  limit: number
}

const LIMIT = 20;

const CardGrid: FC<CardGridProps> = ({ searchValue, limit = LIMIT }): JSX.Element => {

  const loadMoreRef = useRef<HTMLDivElement>(null)
  const { loading, error, pokemonList, fetchNextPage } = usePokemons({ limit, searchValue });

  console.log("pokemons: ", pokemonList);

  const isObserverEnable = () => !!pokemonList.length && pokemonList.length%limit === 0

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: isObserverEnable(),
    trigger: pokemonList,
  })

  if (error) return <p className='center'>Error: {error.message} </p>

  if (loading && !pokemonList.length) {
    return <Loader />;
  }

  return (
    <div className="card-grid">
      {
        pokemonList?.map((pokemon: Pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} onClick={() => console.log(pokemon)} />
        })
      }
      <div id="ref" ref={loadMoreRef}>
        {loadMoreRef && isObserverEnable() ? <Loader /> : ""}
      </div>
    </div>
  );
}


export default CardGrid;
