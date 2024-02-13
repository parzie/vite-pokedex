import { FC, useRef } from 'react';
import Image from '../UI/Image/Image';
import './SearchBar.scss';

interface Props {
  searchText: string;
  setSearchText: (value: string) => void;
}

const SearchBar: FC<Props> = ({
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
          src="searchIcon.svg"
          alt="Search icon"
          imageBpWidths={['24px', '24px']}
        />
        <input
          type="text"
          placeholder="Search..."
          onChange={({ target: { value } }) => setSearchText(value)}
          value={searchText}
        />
      </div>
    </div>
  );
};

export default SearchBar;
