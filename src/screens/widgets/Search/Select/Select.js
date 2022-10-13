import { memo, useMemo } from 'react';
import { InputAdornment, Select, MenuItem, FormControl } from '@mui/material/';
import styles from './Select.module.css';
import { useGetSearchContext } from '../provider';
import { initCase } from '../init';
function SearchSelect({ data }) {
  const {state:{ controller }, dispath} = useGetSearchContext();
  return (
    <InputAdornment position="end" sx={{ color: 'inherit !important',width:'6em' }}>
      <FormControl fullWidth variant="standard">
        <Select
          size="small"
          sx={{ color: 'inherit !important' }}
          displayEmpty
          fullWidth
          disableUnderline
          value={controller || ''}
          onChange={(e, o) => {
            dispath([initCase.SET_CONTROLLER, o.props.value]);
          }}
          SelectDisplayProps={{
            sx: {
              textAlign: 'center',
              background: 'transparent',
            },
          }}
          MenuProps={{
            MenuListProps: {
              className: styles.menu,
              sx: {
                p: 1,
              },
            },
          }}
          renderValue={(selected) => {
            const cont = data.find((i) => {
              return i.value == controller;
            });
            if (cont) {
              return cont.text;
            } else {
              dispath([initCase.SET_CONTROLLER, data[0].value]);
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
    </InputAdornment>
  );
}
export default memo(SearchSelect);
