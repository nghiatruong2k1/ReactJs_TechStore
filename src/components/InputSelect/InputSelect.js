import { memo } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material/';
import clsx from 'clsx';
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
  isRequired
}) {
  return (
    <>
      <FormControl fullWidth className={clsx(styles.root,styles[variant])} disabled={disabled}>
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
                isRequired && onChange && onChange(data[0].value);
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
