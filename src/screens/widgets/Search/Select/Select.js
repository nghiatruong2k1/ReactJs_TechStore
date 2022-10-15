import { memo } from 'react';
import { InputAdornment, Select, MenuItem, FormControl } from '@mui/material/';
function SearchSelect({ value, onChange, data }) {
  return (
    <InputAdornment
      position="end"
      sx={{ color: 'inherit !important', width: '6em' }}
    >
      <FormControl fullWidth variant="standard">
        <Select
          size="small"
          sx={{ color: 'inherit !important' }}
          displayEmpty
          fullWidth
          disableUnderline
          value={value || ''}
          onChange={(e, o) => {
            onChange && onChange(o.props.value);
          }}
          SelectDisplayProps={{
            sx: {
              textAlign: 'center',
              background: 'transparent',
            },
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
    </InputAdornment>
  );
}
export default memo(SearchSelect);
