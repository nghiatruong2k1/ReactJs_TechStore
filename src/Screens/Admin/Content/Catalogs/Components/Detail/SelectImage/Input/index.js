import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Stack,Button} from '@mui/material/';
import {CloudUpload} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from '../../init';
function InfoInput({...props}){
  const {state,handle} = useContext(DetailContext);
  const {uploadImage} = useContext(global.config.context);
  function handleSubmit(result){
    handle.change("ImageId",result.Id);
    handle.change("ImageUrl",result.Url);
  }
  function handleClick(){
    uploadImage.handle.open({
      Id:state.data.ImageId,
      Url:state.data.ImageUrl,
      onSubmit:handleSubmit
    })
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
export default memo(InfoInput);