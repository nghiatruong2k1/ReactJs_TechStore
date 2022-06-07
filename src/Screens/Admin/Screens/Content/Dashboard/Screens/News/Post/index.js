import {memo} from 'react';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid
} from '@mui/material/';
import {} from '@mui/icons-material/';
import{ NavLink }from'react-router-dom';
import styles from './styles.module.css';
function Post({...props}){
  return(
    <Grid item {...props}>
      <Card className={styles.card}>
        <CardContent className={styles.header}>
          <Typography 
              component={NavLink}
              color="primary"
              to="/" 
              className={styles.title}
          >
            Ghi chú
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography className={styles.text}>
            Nội dung ghi chú
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default memo(Post);