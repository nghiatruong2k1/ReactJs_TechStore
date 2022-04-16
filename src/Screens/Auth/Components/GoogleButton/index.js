import {memo} from 'react';
import clsx from 'clsx';
import {Button} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function GoogleButton({...props}){
  return(
    <Button 
      className={styles.button}
      variant="contained"
      startIcon={
        <i className="fab fa-google"></i>
      }>Google
    </Button>
  )
}
export default memo(GoogleButton);