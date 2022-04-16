import {memo} from 'react';
import clsx from 'clsx';
import {Card,CardContent,Typography} from '@mui/material/';
import {ShoppingCart} from '@mui/icons-material/';
import styles from './styles.module.css';
function CartEmpty({...props}){
  return(
    <Card component="li">
      <CardContent className={styles.content}>
        <ShoppingCart className={styles.icon}/>
        <Typography component="h5">Giỏ hàng của bạn trống</Typography>
      </CardContent>
    </Card>
  )
}
export default memo(CartEmpty);