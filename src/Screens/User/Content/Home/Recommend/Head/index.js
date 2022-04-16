import {memo} from 'react';
import clsx from 'clsx';
import {Stack,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function Head({...props}){
  return(
    <Stack direction="row" width="100%" spacing={3} alignItems="center" className={styles.header}>
      <Typography component="h5">Sản phẩm đề xuất:</Typography>
    </Stack>
  )
}
export default memo(Head);