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
            const cont = data.find((i) => {
              return i.value === value;
            });
            if (cont) {
              return cont.text;
            } else {
              onChange && onChange(data[0].value);
            }
          }}
        >
          {data.map(function (type, index) {
            return (
              <MenuItem key={index} value={type.value}>
                {type.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
export default memo(SearchSelect);
