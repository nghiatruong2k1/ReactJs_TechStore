 import {memo,useState,useMemo} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import styles from './styles.module.css';
function Contact({...props}){
  const [isLoading, setLoading] = useState(false);
  const handleClick = useMemo(function(){
    return function () {
      setLoading(true);
      setTimeout(function(){
        setLoading(false);
      },2000)
    }
  },[]);
  return(
    <LoadingButton
          onClick={handleClick}
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