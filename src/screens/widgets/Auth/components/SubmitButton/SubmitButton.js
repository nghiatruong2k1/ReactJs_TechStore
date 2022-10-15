import {memo} from 'react';
import {LoadingButton} from '@mui/lab/';
import styles from './SubmitButton.module.css';
import { useGetFormContext } from '../FormProvider/provider';
  
function SubmitButton({children,...props}){
  const {isLoading} = useGetFormContext();
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
