
import './Pokedex.scss';
import Pokeball from '../components/UI/Pokeball';
import Loader from '../components/Loader/Loader';
import Title from '../components/UI/Title';
import { POKEMONS_QUERY } from '../graphql/queries/Pokemon';
import { useQuery } from '@apollo/client';
import { Pokemon } from '../types';


function Pokedex() {

  const { loading, data } = useQuery(POKEMONS_QUERY, {
    variables: { limit: 100, name: '' },
  });


  if (loading){
    return <Loader />;
  }

  return (
    <div className="pokedex">
      <Title parentClass="pokedex" titleAs="h1" size={1}>Pokedex</Title>
      <Pokeball classStyle={'pokeball--dark pokeball--inverted pokeball--big'} />
      <ul className="pokedex__list">
        {data.pokemon_v2_pokemon.map(({ id, name }: Pokemon) => {
            return <li key={id}>{name}</li>
        })}
      </ul>
    </div>
  )
}

export default Pokedex
