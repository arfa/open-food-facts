import SearchInput from '../../components/SearchInput';

export function SearchProduct() {
  return <SearchInput onSubmit={(e) => console.log(e)} />;
}
