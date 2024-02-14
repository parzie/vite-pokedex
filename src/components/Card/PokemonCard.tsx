import { MouseEventHandler, memo } from 'react';
import { getImageURL } from '../../utils';
import Pokeball from '../UI/Pokeball/Pokeball';
import { Pokemon } from '../../types';
import './Card.scss';


const Card = memo(({ pokemon, onClick }: { pokemon: Pokemon, onClick: MouseEventHandler<HTMLDivElement> }) => {
  if (!pokemon) {
    return null;
  }

  const { name, id, pokemon_v2_pokemontypes: types } = pokemon;

  const imgURL = getImageURL(id);
  const className = types.map(({ pokemon_v2_type: { name } }) => `type-${name}`).join(' ');
  const paddedId = `#${id.toString().padStart(3, '000')}`;

  return (
    <div className="card" onClick={onClick}>
      <div className={`card__container ${className}`}>
        <Pokeball classStyle='pokeball--mid' />
        <span className="card__pokemon-id">{paddedId}</span>
        <h2 className="card__title">
          {name.replace(/-/g, ' ')}
        </h2>
        <div className="card__pokemon-types">
          {
            types.map(({ pokemon_v2_type: { name } }) => (
              <span className="card__pokemon-type" key={name}>{name}</span>
            ))
          }
        </div>
        <div className="card__pokemon-image">
          <img alt={name} src={imgURL} />
        </div>
      </div>
    </div>
  );
})

export default Card;
