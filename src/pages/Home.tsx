
import Card from "../components/Card/Card";
import { NavLink } from "react-router-dom";
import { Pokeball } from '../components/UI/Pokeball/Pokeball';
import './Home.scss';

function Home() {
  const CARDS = [
    {
      color: 'grass',
      name: 'Pokedex',
      link: '/pokedex'
    },
    {
      color: 'fire',
      name: 'Moves',
      link: '/'
    },
    {
      color: 'water',
      name: 'Abilities',
      link: '/'
    },
    {
      color: 'electric',
      name: 'Items',
      link: '/'
    },
    {
      color: 'poison',
      name: 'Locations',
      link: '/'
    },
    {
      color: 'ground',
      name: 'Type Chards',
      link: '/'
    },
  ]

  return (
    <div className="home">
      <h1 className="home__title">What Pokemon are you looking for</h1>
      <Pokeball classStyle={'pokeball--dark pokeball--inverted pokeball--big'} />
      <div className="home__grid">
        {CARDS.map(({ color, name, link }) => (
          <NavLink key={name} className="home__navigation-link" to={link}>
            <Card key={name} name={name} color={color} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Home
