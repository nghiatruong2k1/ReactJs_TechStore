import { memo, useCallback, useReducer } from 'react';

import { initState, reducerState, initCase } from './init';
import Provider from './provider';
import SearchForm from './Form';
import SearchSelect from './Select';
import SearchInput from './Input';
import SearchOption from './Option';
function SearchComponent({ controllers }) {
  const [state, dispath] = useReducer(reducerState, initState);
  const handleChangeInput = useCallback((value)=>{
    dispath([initCase.SET_QUERY, value]);
  },[])
  const handleChangeSelect = useCallback((value)=>{
    dispath([initCase.SET_CONTROLLER, value]);
  },[])
  return (
    <Provider value={{ state, dispath }}>
      <SearchForm>
        <SearchSelect data={controllers} value={state.controller} onChange={handleChangeSelect}/>
        <SearchInput value={state.query} onChange={handleChangeInput}/>
        <SearchOption />
      </SearchForm>
    </Provider>
  );
}
export default memo(SearchComponent);
