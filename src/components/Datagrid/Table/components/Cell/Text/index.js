import { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography, Skeleton, TextField } from '@mui/material/';
function CellText({
  loading,
  text,
  display: { onChange, name, format },
  data,
}) {
  if (onChange) {
    return (
      <TextField
        fullWidth
        size="small"
        value={data ? (data[name] || "") : ''}
        disabled={loading}
        autoComplete='off'
        onChange={(e) => {
          if (data) {
            data[name] = e.target.value;
            onChange && onChange(name, e.target.value, data);
          }
        }}
      />
    );
  } else {
    return (
      <Typography whiteSpace="nowrap" fontWeight="inherit" sx={{ flex: 1 }}>
        {loading ? (
          <Skeleton />
        ) : (
          (data &&
            ((typeof format === 'function' && format(data[name], data)) ||
              data[name])) ||
          text ||
          ''
        )}
      </Typography>
    );
  }
}
CellText.propTypes = {
  text: PropTypes.string,
};
CellText.defaultProps = {
  text: '',
};
export default memo(CellText);
