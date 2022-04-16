import {memo,useState} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import styles from './styles.module.css';
function Contact({loading,...props}){
  const [isLoading, setLoading] = useState(false);
  function handleClick() {
    setLoading(!isLoading);
  }
  return(
    <LoadingButton
          onClick={handleClick}
          disabled={isLoading || loading}
          loading={isLoading}
          loadingPosition="start"
          className={styles.button}
          startIcon={<span className={clsx("fas fa-envelope",styles.icon)}/>}
          variant="contained"
        >
          Liên hệ
    </LoadingButton>
  )
}
export default memo(Contact);