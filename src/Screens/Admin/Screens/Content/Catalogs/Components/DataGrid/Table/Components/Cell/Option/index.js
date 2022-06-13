import {memo} from 'react';
import clsx from 'clsx';
import {
  Skeleton
} from '@mui/material/';
import styles from './styles.module.css';

function CellOption({data,loading,sx,children,...props}){
  return(
    <>
      {
        !loading && (<>{children}</>) 
        || <Skeleton variant="text" width="100%" />
      }
    </>
  )
}
export default memo(CellOption);