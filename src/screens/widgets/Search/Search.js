import { memo, useReducer } from 'react';

import { initState, reducerState, initCase } from './init';
import Provider from './provider';
import SearchForm from './Form';
import SearchSelect from './Select';
import SearchInput from './Input';
import SearchOption from './Option';
function SearchComponent({ controllers }) {
  const [state, dispath] = useReducer(reducerState, initState);
  return (
    <Provider value={{ state, dispath }}>
      <SearchForm>
        <SearchSelect data={controllers} />
        <SearchInput />
        <SearchOption />
      </SearchForm>
    </Provider>
  );
}
export default memo(SearchComponent);
