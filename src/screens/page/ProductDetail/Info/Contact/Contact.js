import {memo,useState,useCallback} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import styles from '../Info.module.css';
import { Box } from '@mui/material';
function InfoContactButton({loading,...props}){
  const [isLoading, setLoading] = useState(false);
  const handleClick = useCallback(()=>{
    setLoading(true);
      setTimeout(function(){
        setLoading(false);
      },2000)
  },[]);
  return(
    <LoadingButton
          onClick={handleClick}
          disabled={isLoading || loading}
          loading={isLoading}
          loadingPosition="start"
          className={styles.button}
          color='info'
          startIcon={<span className={"fas fa-envelope"}/>}
          variant="contained"
        >
         <Box  sx={{display:{xs:'none',lg:'inline'}}}>Liên hệ</Box>
    </LoadingButton>
  )
}
export default memo(InfoContactButton);