import {memo,useContext} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {FormContext} from "../FormProvider/";
  
function SubmitButton({children,...props}){
  const {isLoading} = useContext(FormContext);
  return(
    <LoadingButton
      disabled={isLoading}
      loading={isLoading}
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
