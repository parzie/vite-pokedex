import './Pokedex.scss';
import { Pokeball } from '../components/UI/Pokeball/Pokeball';
import Title from '../components/UI/Title';

function Pokedex() {
  
  return (
    <div className="pokedex">
      <Title parentClass="pokedex" titleAs="h1" size={1}>Pokedex</Title>
      <Pokeball classStyle={'pokeball--dark pokeball--inverted pokeball--big'} />
    </div>
  )
}

export default Pokedex
