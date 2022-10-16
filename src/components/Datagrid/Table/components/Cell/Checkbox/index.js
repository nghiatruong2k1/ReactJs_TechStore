import { memo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { TableCell, Checkbox } from '@mui/material/';
function CellCheckbox({ loading, text, display:{name,onChange,onSave}, data }) {
  return (
    <Checkbox
      disabled={loading}
      checked={Boolean(data[name])}
      onChange={(e) => {
        if(onChange){
          data[name] = e.target.checked;
          onChange(name, e.target.checked, data);
          onSave && onSave(data);
        }
      }}
    />
  );
}
export default memo(CellCheckbox);
