import {memo,useContext} from 'react';
import {
  TableRow,
  TableCell,
  Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DataContext} from '../../../provider';
function RowEmpty({...props}){
  const {config} = useContext(DataContext)
  return(
    <TableRow className={styles.row}>
        <TableCell colSpan="100%">
          <Typography variant="h5" align="center" className={styles.title} >
           {config.empty || "Không có dữ liệu"}
          </Typography>
        </TableCell>
    </TableRow>
  )
}
export default memo(RowEmpty);