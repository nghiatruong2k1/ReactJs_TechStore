import {memo,useContext} from 'react';
import clsx from "clsx";
import {Stack,TextField,Typography} from '@mui/material/';
import styles from './styles.module.css';
import {DetailContext} from "../provider";
function InfoInput({...props}){
  const {data,handle} = useContext(DetailContext);
function handleInput(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      global.config.fileToBase64(file)
        .then(result=>{
             handle.set("url",result);
             handle.set("size",file.size);
             handle.set("type",file.type);
        })
        .catch(error=>{
             handle.set("url","");
             handle.set("size",0);
             handle.set("type","");
        })
        .finally(()=>{
          event.target.value="";
        })
    }
  }
  return(
    <Stack direction="row">
      <div className={styles.container}>
        <i className={clsx("fas fa-image",styles.icon)}></i>
        <Typography>Select or drag and drop images</Typography>
        <TextField 
              onInput = {handleInput}
              type="file"
              fullWidth
              className={styles.feild}
              SelectProps={{
                className:styles.select
              }}
              InputProps={{
                className:styles.control
              }}
              inputProps={{
                className:styles.input
              }}
        />
      </div>
    </Stack>
  )
}
export default memo(InfoInput);
  
