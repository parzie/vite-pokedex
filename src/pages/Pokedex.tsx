
import './Pokedex.scss';
import Pokeball from '../components/UI/Pokeball/Pokeball';
import Title from '../components/UI/Title/Title';
import SearchBar from '../components/SearchBar/SearchBar';
import CardGrid from '../components/CardGrid/CardGrid';
import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';


function Pokedex() {
  const [searchValue, setSearchValue] = useState('');
  const debounedSearchValue = useDebounce(searchValue, 300);

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
      <CardGrid searchValue={debounedSearchValue} limit={20}/>
    </div>
  )
}

export default Pokedex;
