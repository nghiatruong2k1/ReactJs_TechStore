import { memo } from 'react';
import { Input } from '@mui/material/';
import styles from './Input.module.css';
import { useGetSearchContext } from '../provider';
import { initCase } from '../init';
function SearchInput() {
  const {state:{ query }, dispath} = useGetSearchContext();
  return (
    <Input
      className={styles.container}
      required
      disableUnderline
      placeholder="Tìm kiếm..."
      inputProps={{
        className: styles.input,
      }}
      value={query ?? ''}
      onChange={(e) => {
        dispath([initCase.SET_QUERY, e.target.value]);
      }}
      autoComplete="off"
      variant="standard"
      type="search"
      sx={{ flex: 1 }}
    />
  );
}
export default memo(SearchInput);
