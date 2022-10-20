import { memo } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material/';
import styles from './InputSelect.module.css';
function InputSelectComponent({
  size,
  initValue,
  value,
  onChange,
  data,
  variant,
  placeholder,
  disabled,
  label,
  error,
  helperText,
}) {
  return (
    <>
      <FormControl fullWidth variant={variant} className={styles.root} disabled={disabled}>
        <InputLabel>{label}</InputLabel>
        <Select
          size={size}
          label={label}
          displayEmpty
          fullWidth
          disabled={disabled}
          className={styles.select}
          value={value || ''}
          onChange={(e, o) => {
            onChange && onChange(o.props.value);
          }}
          SelectDisplayProps={{
            className: styles.display,
          }}
          MenuProps={{
            disablePortal: true,
            MenuListProps: {
              className: styles.list,
            },
          }}
          renderValue={() => {
            if (data && Array.isArray(data) && data.length > 1) {
              const cont = data.find((i) => {
                return i.value === value;
              });
              if (cont) {
                return cont.text;
              } else {
                onChange && onChange(initValue);
              }
            }
            return '';
          }}
        >
          {placeholder && (
            <MenuItem key={0} value={initValue} className={styles.item} divider>
              {placeholder}
            </MenuItem>
          )}
          {Array.isArray(data) &&
            data.map(function (type, index) {
              return (
                <MenuItem
                  key={index + 1}
                  value={type.value}
                  className={styles.item}
                  divider
                >
                  {type.text}
                </MenuItem>
              );
            })}
        </Select>
        <FormHelperText error={Boolean(error)}>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
}
export default memo(InputSelectComponent);
