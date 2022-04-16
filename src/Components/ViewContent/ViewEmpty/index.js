import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Stack,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function ViewEmpty({children,...props}){
  return(
    <Grid item xs={12}>
      <Stack direction="row" alignItems="center"justifyContent="center" px={2} py={3}>
        <Typography component="h3" className={styles.text}>
          {children || "Không tìm thấy nội dung"}
        </Typography>
      </Stack>
    </Grid>
  )
}
export default memo(ViewEmpty);