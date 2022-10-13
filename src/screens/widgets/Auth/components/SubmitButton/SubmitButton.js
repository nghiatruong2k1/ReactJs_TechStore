import {memo,useContext} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import {} from '@mui/icons-material/';
import styles from './SubmitButton.module.css';
  
function SubmitButton({children,...props}){
  return(
    <LoadingButton
      disabled={false}
      loading={false}
      loadingPosition="start"
      startIcon={(<></>)}
      className={styles.button}
      variant="contained"
      type="submit"
      {...props}
    >
        {children}
    </LoadingButton>
  )
}
export default memo(SubmitButton);
