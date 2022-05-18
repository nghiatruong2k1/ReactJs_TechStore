import {memo,useContext} from 'react';
import {Button,CircularProgress} from '@mui/material/';
import styles from './styles.module.css';
function LoadingData({...props}){
  const {loading} = useContext(global.config.context);
  if(loading.state.length > 0){
    return (
      <Button variant="outlined" className={styles.button}>
        <CircularProgress className={styles.svg}/>
      </Button>
    )
  }
  else{
    return <></>
  }
}
export default memo(LoadingData);