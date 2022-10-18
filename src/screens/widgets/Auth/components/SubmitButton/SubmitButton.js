import {memo} from 'react';
import {LoadingButton} from '@mui/lab/';
import styles from './SubmitButton.module.css';
import { useGetFormContext } from '../FormProvider/provider';
import { useGetAuth } from '~/hooks/Auth';
  
function SubmitButton({children,...props}){
  const {state:{isLoading}} = useGetAuth()
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
