import React, { FormEvent, SyntheticEvent } from 'react';
import Button from '../Button/Button';

interface SearchInputProps {
  searchButton?: string;
  searchPlaceholder?: string;
  onSubmit: (query: string) => void;
  style?: React.CSSProperties;
  className?: string;
}

const DEFAULT_TEXT = 'Search';

const SearchInput: React.FC<SearchInputProps> = ({
  onSubmit,
  searchPlaceholder = DEFAULT_TEXT,
  searchButton = DEFAULT_TEXT,
  style,
  className,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit} className={`${className}`} style={style}>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{searchPlaceholder}</span>
        </label>
        <div className='relative'>
          <input
            type='search'
            className='w-full pr-16 input input-primary input-bordered'
            value={searchTerm}
            placeholder={searchPlaceholder}
            onChange={handleChange}
            autoFocus
          />
          <Button variant='primary' className='absolute top-0 right-0 rounded-l-none'>
            {searchButton}{' '}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
