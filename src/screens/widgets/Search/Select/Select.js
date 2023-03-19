import { memo } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material/';
import styles from '../Search.module.css';
function SearchSelect({ value, onChange, data }) {
  return (
    <>
      <FormControl fullWidth variant="standard">
        <Select
          size="small"
          displayEmpty
          fullWidth
          disableUnderline
          className={styles.select}
          value={value || ''}
          onChange={(e, o) => {
            onChange && onChange(o.props.value);
          }}
          SelectDisplayProps={{
            className: styles.display,
          }}
          MenuProps={{
            MenuListProps: {
              sx: {
                p: 1,
              },
            },
          }}
          renderValue={() => {
            if (data[value]) {
              return data[value].title;
            } else {
              onChange && onChange(0);
            }
          }}
        >
          {data.map((controller, key) => {
            return (
              <MenuItem key={key} value={key}>
                {controller.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
export default memo(SearchSelect);
