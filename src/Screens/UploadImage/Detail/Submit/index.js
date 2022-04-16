import {memo,useContext} from 'react';
import {Stack,Button} from '@mui/material/';
import {CloudUpload} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../provider";
function Submit({...props}){
  const {data,handle} = useContext(DetailContext);
  function handleClick(){
    handle.save();
    handle.refetch();
  }
  return(
    <Stack direction="row">
      <Button 
        variant="contained" 
        onClick = {handleClick}
        className={styles.button} 
        startIcon={<CloudUpload className={styles.icon}/>}
      >
        Upload Image
      </Button>
    </Stack>
  )
}
export default memo(Submit);