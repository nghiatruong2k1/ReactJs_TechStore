import { memo, useCallback } from 'react';

import { FormControl, FormGroup } from '@mui/material/';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { routers, getAction } from '~/config/Router';
import styles from './Form.module.css';
import { useGetSearchContext } from '../provider';
import { initCase } from '../init';
function SearchForm({ children }) {
  const navigator = useNavigate();
  const {state:{ query, controller }, dispath} = useGetSearchContext();
  const handleSubmit = useCallback(
    (e) => {
      e.isDefaultPrevented();
      e.preventDefault();
      if (query !== '' && routers[controller]) {
        navigator({
          pathname: `${getAction(routers[controller].search)}?query=${query}`,
        });
        dispath([initCase.SET_QUERY, '']);
      }
    },
    [query, controller],
  );
  return (
    <FormControl
      fullWidth
      autoComplete="off"
      component="form"
      onSubmit={handleSubmit}
    >
      <FormGroup
        row
        className={styles.form}
        sx={{
          py: 0.4,
          px: 0.15,
          alignItems: 'center',
          borderRadius: 1.5,
          borderWidth: 0.25,
          borderStyle: 'solid',
        }}
      >
        {children}
      </FormGroup>
    </FormControl>
  );
}
export default memo(SearchForm);
