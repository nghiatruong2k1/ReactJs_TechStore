import { memo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { TableCell, Checkbox } from '@mui/material/';
function CellCheckbox({ loading, text, display:{name,onChange}, data }) {
  return (
    <Checkbox
      disabled={loading}
      checked={data ? (Boolean(data[name]) || false) : false}
      onChange={(e,checked) => {
        if(onChange){
          data[name] = checked;
          onChange(name, checked, data);
        }
      }}
    />
  );
}
export default memo(CellCheckbox);
