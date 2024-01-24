import './Pokedex.scss';

import { Pokeball } from '../components/UI/Pokeball/Pokeball';

function Pokedex() {
  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <Pokeball classStyle={'pokeball--dark pokeball--inverted pokeball--big'} />
    </div>
  )
}

export default Pokedex
