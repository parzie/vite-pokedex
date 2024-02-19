import { MouseEventHandler, memo } from 'react';
import { getImageURL } from '../../utils';
import Pokeball from '../UI/Pokeball/Pokeball';
import { Pokemon } from '../../types';
import Title from '../UI/Title/Title';
import Image from '../UI/Image/Image';
import './Card.scss';

type pokemonCardProps = {
  pokemon: Pokemon,
  onClick: MouseEventHandler<HTMLDivElement>
}

const PokemonCard = memo(({ pokemon, onClick }: pokemonCardProps) => {
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
        <Pokeball className='pokeball--mid' />
        <span className="card__pokemon-id">{paddedId}</span>
        <Title parentClass={'card'} size={2} >
          {name.replace(/-/g, ' ')}
        </Title>
        <div className="card__pokemon-types">
          {
            types.map(({ pokemon_v2_type: { name } }) => (
              <span className="card__pokemon-type" key={name}>{name}</span>
            ))
          }
        </div>
        <Image 
          parentClass="card"
          alt={name} 
          src={imgURL} />
      </div>
    </div>
  );
})

export default PokemonCard;
