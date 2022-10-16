import { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography, Skeleton, TextField } from '@mui/material/';
function CellNumber({
  loading,
  text,
  display: { onChange, onSave, name, format },
  data,
}) {
  if (onChange) {
    return (
      <TextField
        fullWidth
        type="number"
        size="small"
        disabled={loading}
        onChange={(e) => {
          if (data) {
            data[name] = e.target.value;
            onChange && onChange(data);
          }
        }}
        onBlur={(e) => {
          if (data) {
            onSave && onSave(data);
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
            ((typeof format === 'function' && format(data[name],data)) ||
              data[name])) ||
          text ||
          ''
        )}
      </Typography>
    );
  }
}
CellNumber.propTypes = {
  text: PropTypes.number,
};
CellNumber.defaultProps = {
  text: 0,
};
export default memo(CellNumber);
