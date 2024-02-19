import { FC } from 'react'
import './Pokeball.scss'

interface PokeballProps {
  className?: string;
}

export const Pokeball: FC<PokeballProps> = ({ className = '' }) => {

  return (
    <div className={`pokeball ${className}`} ></div>
  )
}

export default Pokeball;