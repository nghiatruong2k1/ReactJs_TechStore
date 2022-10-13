import {memo} from 'react';
import clsx from 'clsx';
import {Button} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function FacebookButton({...props}){
  return(
    <Button 
      className={styles.button}
      variant="contained"
      color='info'
      startIcon={
        <span className="fab fa-facebook-f"></span>
      }>Facebook
    </Button>
  )
}
export default memo(FacebookButton);