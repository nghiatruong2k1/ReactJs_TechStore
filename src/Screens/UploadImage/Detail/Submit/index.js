import {memo,useContext} from 'react';
import {Stack,Button} from '@mui/material/';
import {CloudUpload} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../provider";
function Submit({...props}){
  return(
    <Stack direction="row">
      <Button 
        variant="contained" 
        type="submit"
        className={styles.button} 
        startIcon={<CloudUpload className={styles.icon}/>}
      >
        Thêm ảnh
      </Button>
    </Stack>
  )
}
export default memo(Submit);