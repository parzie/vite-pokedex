import { FC } from 'react';
import { Pokeball } from '../UI/Pokeball/Pokeball';
import './Card.scss';

type CardProps = { 
  name: string;
  color: string; 
}

const Card: FC<CardProps> = ({ name, color }) => {

  return (
    <div className="card">
      <div className={`card__container type-${color}`}>
        <Pokeball />
        <h2 className="card__title">{name}</h2>
      </div>
    </div>
  );
}

export default Card;
