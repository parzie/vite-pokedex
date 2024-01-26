
import './Pokedex.scss';
import { Pokeball } from '../components/UI/Pokeball/Pokeball';
import { useEffect, useState } from 'react';
import { getPokemons } from '../api/axios';
import { GenericItem, Result } from '../Interface';
import Loader from '../components/Loader/Loader';
import Title from '../components/UI/Title';

function Pokedex() {
  const [pokemons, setpokemons] = useState<Result[] | GenericItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { results } = await getPokemons();

        setpokemons(results);
      } catch (error) {
        console.log("error: ", error);
      }
    }

    getData();
  }, [])

  if (!pokemons.length){
    return <Loader />;
  }

  return (
    <div className="pokedex">
      <Title parentClass="pokedex" titleAs="h1" size={1}>Pokedex</Title>
      <Pokeball classStyle={'pokeball--dark pokeball--inverted pokeball--big'} />
      <ul className="pokedex__list">
        {pokemons.map(({ name }) => {
            return <li>{name}</li>
        })}
      </ul>
    </div>
  )
}

export default Pokedex
