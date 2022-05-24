import {memo,useState,useEffect} from 'react';
import clsx from 'clsx';
import {TableCell,Checkbox} from '@mui/material/';
function CellCheckbox({name,loading,data,onChange,...props}){
  return(
    <Checkbox 
      checked={Boolean(data && data[name])}
      onChange={(e)=>{onChange && onChange(e,e.target.checked)}}
      name={name}
      {...props}
    />
  )
}
export default memo(CellCheckbox);