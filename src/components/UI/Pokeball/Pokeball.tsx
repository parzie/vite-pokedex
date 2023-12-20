import { FC } from 'react'
import './Pokeball.scss'

interface PokeballProps {
  classStyle?: string;
}

export const Pokeball: FC<PokeballProps> = ({ classStyle = '' }) => {

  return (
    <div className={`pokeball ${classStyle}`} ></div>
  )
}

