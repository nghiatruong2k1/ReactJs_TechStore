import {memo} from 'react';
import clsx from 'clsx';
import {Button} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function SubmitButton({children,...props}){
  return(
    <Button type="submit" variant="contained" {...props}>
      {children}
    </Button>
  )
}
export default memo(SubmitButton);