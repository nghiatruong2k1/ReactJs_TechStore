import { memo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { TableCell, Checkbox } from '@mui/material/';
function CellCheckbox({ loading, text, display:{name,onChange,onSave}, data }) {
  return (
    <Checkbox
      disabled={loading}
      checked={data && Boolean(data[name])}
      onChange={(e) => {
        if(onChange){
          data[name] = e.target.value;
          onChange(name, e.target.checked, data);
          onSave && onSave(data);
        }
      }}
    />
  );
}
export default memo(CellCheckbox);
