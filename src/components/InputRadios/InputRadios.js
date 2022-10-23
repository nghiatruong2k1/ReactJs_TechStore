import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material/';
import clsx from 'clsx';
import styles from './InputRadios.module.css';
function InputRadiosComponent({
  value,
  onChange,
  data,
  disabled,
  readOnly,
  loading,
  label,
  error,
  helperText,
  variant
}) {
  return (
    <>
      <FormControl
        fullWidth
        variant={variant}
        className={clsx(styles.root,styles[variant])}
        disabled={disabled}
        readOnly={readOnly}
      >
        <FormLabel className={styles.label}>{label}</FormLabel>
        <RadioGroup className={styles.group} value={value} onChange={!readOnly && !disabled && onChange || undefined}>
          {data &&
            Array.isArray(data) &&
            data.map((item, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={item.value}
                  control={<Radio />}
                  label={item.text}
                />
              );
            })}
        </RadioGroup>
        <FormHelperText error={Boolean(error)}>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
}
InputRadiosComponent.defaultProps = {
  variant:'outlined'
}
InputRadiosComponent.propTypes = {
  variant:PropTypes.oneOf(['outlined','filled','standard'])
}
export default memo(InputRadiosComponent);
