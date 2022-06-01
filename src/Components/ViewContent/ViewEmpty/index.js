import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Stack,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function ViewEmpty({children,component,childrenComponent,...props}){
  return(
    <Grid item xs={12} component={component|| "div"}>
      <Stack component={childrenComponent || "div"} width="100%" direction="row" alignItems="center"justifyContent="center" px={1} py={1}>
        <Typography component="h5" className={styles.text}>
          {children || "Không tìm thấy nội dung"}
        </Typography>
      </Stack>
    </Grid>
  )
}
export default memo(ViewEmpty);