import { FC, useRef } from 'react';
import Image from '../UI/Image/Image';
import './SearchBar.scss';

interface SearchBarProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  searchText,
  setSearchText,
}): JSX.Element => {
  const resultsContainer = useRef<HTMLDivElement>(null);

  return (
    <div
      className='search-bar'
      ref={resultsContainer}
      role="button"
      onKeyDown={() => { }}
      tabIndex={0}
    >
      <div className='search-bar__input'>
        <Image
          parentClass='search-bar'
          src="searchIcon.svg"
          alt="Search icon"
          imageBpWidths={['24px', '24px']}
        />
        <input
          type="text"
          placeholder="What pokemon are you looking for?"
          onChange={({ target: { value } }) => setSearchText(value)}
          value={searchText}
        />
      </div>
    </div>
  );
};

export default SearchBar;
