import {memo,useEffect,useContext} from 'react';
import clsx from 'clsx';
import {
  Stack,
  Skeleton,
  TableRow,
  TableCell,
  Tooltip,
  IconButton
} from '@mui/material/';
import styles from './styles.module.css';

function CellOption({data,loading,sx,children,...props}){
  return(
    <TableCell
      align="center"
      disabled={loading}
      sx={{width:'max-content',maxWidth:'max-content',...sx}} 
      {...props}
    >
      <Stack direction="row" justifyContent = 'center'>
        {
          !loading && (<>{children}</>) 
          || <Skeleton variant="text" width="100%" />
        }
      </Stack>
    </TableCell>
  )
}
export default memo(CellOption);