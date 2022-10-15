import { memo } from 'react';
import { Input } from '@mui/material/';
import styles from './Input.module.css';
function SearchInput({value,onChange}) {
  return (
    <Input
      className={styles.container}
      required
      disableUnderline
      placeholder="Tìm kiếm..."
      inputProps={{
        className: styles.input,
      }}
      value={value ?? ''}
      onChange={(e) => {
        onChange && onChange(e.target.value)
      }}
      autoComplete="off"
      variant="standard"
      type="search"
      sx={{ flex: 1 }}
    />
  );
}
export default memo(SearchInput);
