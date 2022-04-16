import {memo} from 'react';
import clsx from 'clsx';
import {
  Card,
  CardActionArea,
  CardHeader,
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
            "Powered by nopCommerce" link
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography 
              to="/" 
              className={styles.text}
          >
            Would you like to remove the "Powered by nopCommerce" link in the bottom of the footer? Click here for more info.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default memo(Post);