import {memo} from 'react';
import clsx from 'clsx';
import {
  TableRow,
  TableCell,
  Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function RowEmpty({...props}){
  return(
    <TableRow className={styles.row}>
        <TableCell colSpan="100%">
          <Typography variant="h5" align="center" className={styles.title} >
           Không có dữ liệu
          </Typography>
        </TableCell>
    </TableRow>
  )
}
export default memo(RowEmpty);