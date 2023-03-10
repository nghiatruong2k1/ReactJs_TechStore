import { Box } from '@mui/material';
import { memo, useCallback, useReducer } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { publicRouters } from '~/routers/Public';
import { initState, reducerState, initCase } from './init';
import SearchLayout from './layout';
function SearchComponent({ controllers,...props }) {
  const [state, dispath] = useReducer(reducerState, initState);
  const handleChangeInput = useCallback((value) => {
    dispath([initCase.SET_QUERY, value]);
  }, []);
  const handleChangeSelect = useCallback((value) => {
    dispath([initCase.SET_CONTROLLER, value]);
  }, []);
  const navigator = useNavigate();
  const handleSubmit = useCallback(
    (e) => {
      e.isDefaultPrevented();
      e.preventDefault();
      if (state.query !== '' && publicRouters[state.controller]) {
        navigator({
          pathname: `${publicRouters[state.controller]?.search.getAction()}?query=${state.query}`,
        });
        dispath([initCase.SET_QUERY, '']);
      }
    },
    [state.query, state.controller],
  );
  return (
    <Box {...props}>
      <SearchLayout
        controllers={controllers}
        state={state}
        dispath={dispath}
        handle={{ handleChangeInput, handleChangeSelect, handleSubmit }}
      />
    </Box>
  );
}
export default memo(SearchComponent);
