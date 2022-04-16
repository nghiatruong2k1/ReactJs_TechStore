import {memo} from 'react';
import clsx from 'clsx';
import {TableCell,Checkbox} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function CellCheckbox({...props}){
  return(
  <TableCell
      align="center"
      style={{width:'2em'}} 
      {...props}
  >
      <Checkbox  />
  </TableCell>
  )
}
export default memo(CellCheckbox);