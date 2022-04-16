import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Stack,Button} from '@mui/material/';
import {CloudUpload} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailInfoContext} from "../provider";
function InfoInput({...props}){
  const {data} = useContext(DetailInfoContext);
  function handleInput(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      global.config.fileToBase64(file)
        .then(result=>{
             data.handle.set("url",result);
             data.handle.set("size",file.size);
             data.handle.set("type",file.type);
        })
        .catch(error=>{
             data.handle.set("url","");
             data.handle.set("size",0);
             data.handle.set("type","");
        })
        .finally(()=>{
          event.target.value="";
        })
    }
  }
  return(
    <Stack direction="row">
      <Button 
        variant="outlined" 
        className={styles.button} 
        startIcon={<CloudUpload className={styles.icon}/>}
      >
        Select Image
        <input 
            onInput = {handleInput}
            type="file"className={styles.input}
        />
      </Button>
    </Stack>
  )
}
export default memo(InfoInput);