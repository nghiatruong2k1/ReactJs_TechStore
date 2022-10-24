import {memo,useContext} from 'react';
import {Stack,Button} from '@mui/material/';
import {CloudUpload} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../Detail/provider";
function Submit({...props}){
  const {data,handle} = useContext(DetailContext);
  function handleSubmit(e){
    handle.save(data);
    e.preventDefault();
  }
  return(
    <Stack direction="row">
      <Button 
        variant="contained" 
        onClick={handleSubmit}
        className={styles.button} 
        startIcon={<CloudUpload className={styles.icon}/>}
      >
        Thêm ảnh
      </Button>
    </Stack>
  )
}
export default memo(Submit);