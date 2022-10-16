import {memo} from 'react';
import {
  TableRow,
  TableCell,
  Typography} from '@mui/material/';
import styles from '../../Table.module.css';
function RowEmpty({empty}){
  return(
    <TableRow className={styles.row}>
        <TableCell colSpan="100%">
          <Typography variant="h5" align="center" >
           {empty || "Không có dữ liệu"}
          </Typography>
        </TableCell>
    </TableRow>
  )
}
export default memo(RowEmpty);