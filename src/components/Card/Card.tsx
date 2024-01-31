import { FC } from 'react';
import Pokeball from '../UI/Pokeball';
import './Card.scss';
import Title from '../UI/Title';

type CardProps = { 
  name: string;
  color: string; 
}

const Card: FC<CardProps> = ({ name, color }) => {

  return (
    <div className="card">
      <div className={`card__container type-${color}`}>
        <Pokeball />
        <Title parentClass="card" titleAs='h3' size={2}>{name}</Title>
      </div>
    </div>
  );
}

export default Card;
