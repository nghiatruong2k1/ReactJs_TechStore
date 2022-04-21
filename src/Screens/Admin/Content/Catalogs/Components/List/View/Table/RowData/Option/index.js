import {memo,useEffect,useContext} from 'react';
import clsx from 'clsx';
import {
  Stack,
  Skeleton,
  TableRow,
  TableCell
} from '@mui/material/';
import styles from './styles.module.css';
import {RowDataContext} from '../provider';

import PublicButton from "./PublicButton/";
import TrashButton from "./TrashButton/";
import EditButton from "./EditButton/";
import DeleteButton from "./DeleteButton/";
function CellOption({...props}){
  const {data,loading} = useContext(RowDataContext);
  return(
    <TableCell
      align="center"
      disabled={loading}
      style={{width:'max-content',maxWidth:'max-content'}} 
      {...props}
    >
      <Stack direction="row" justifyContent = 'center'>
        {
          data && (
            <>
              <PublicButton />
              <TrashButton />
              <DeleteButton />
              <EditButton />
            </>
          ) || <Skeleton variant="text" width="100%" />
        }
      </Stack>
    </TableCell>
  )
}
export default memo(CellOption);