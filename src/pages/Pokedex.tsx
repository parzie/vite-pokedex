
import './Pokedex.scss';
import Pokeball from '../components/UI/Pokeball';
import Title from '../components/UI/Title';
import SearchBar from '../components/SearchBar/SearchBar';
import CardGrid from '../components/CardGrid/CardGrid';
import { useState } from 'react';


function Pokedex() {
  const [searchValue, setSearchValue] = useState('');

  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className="pokedex">
      <Title parentClass="pokedex" titleAs="h1" size={1}>Pokedex</Title>
      <Pokeball classStyle={'pokeball--dark pokeball--inverted pokeball--big'} />
      <SearchBar
        setSearchText={handleSetSearchValue}
        searchText={searchValue}
      />
      <CardGrid searchValue={searchValue} limit={100}/>
    </div>
  )
}

export default Pokedex
