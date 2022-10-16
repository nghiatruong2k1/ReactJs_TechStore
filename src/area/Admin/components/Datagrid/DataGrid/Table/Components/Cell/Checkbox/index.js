import {memo,useState,useEffect} from 'react';
import clsx from 'clsx';
import {TableCell,Checkbox} from '@mui/material/';
function CellCheckbox({name,loading,data,enableEdit,onChange,onSave,...props}){
  return(
    <Checkbox 
      checked={Boolean(data && data[name])}
      onChange={(e)=>{
        if(enableEdit && data){
          data[name] = e.target.checked
          onChange && onChange(data);
          onSave && onSave(data);
        }
      }}
      name={name}
      {...props}
    />
  )
}
export default memo(CellCheckbox);