import {memo,useContext,useState,useMemo,useEffect} from 'react';
import clsx from "clsx";
import {Stack,TextField,FormControl,FormHelperText,Typography,Slider} from '@mui/material/';
import styles from './styles.module.css';
import {DetailContext} from "../Detail/provider";
import { formatByte } from '../../../../config/Format';
const MAX_SIZE = 1000000;


function validateFile(file){
  if(!(file.type && file.type.match('image/*'))){
    return "Định dạng file không hợp lệ (chỉ chấp nhận hình ảnh)";
  }
  if(file.size > MAX_SIZE){
    return "Kích thước file vượt quá giới hạn ("+formatByte(MAX_SIZE)+")"
  }
  return "";
}


function InfoInput({...props}){
  const {data,handle} = useContext(DetailContext);
  const [file,setFile] = useState();
  const [load,setLoad] = useState(0);
  const [valid,setValid] = useState("");
  const reader = useMemo(function(){
    return new FileReader();
  },[])
  function handleInput(event){
    const promise =  new Promise((resolve, reject) => {  
          setLoad(0)   
          setFile({})
          setValid("")     
          if(event.target.files.length > 0){     
            const newFile = event.target.files[0];
            setFile(newFile); 
            const newValid = validateFile(newFile); 
            if(newValid === ""){
              reader.readAsDataURL(newFile);
              reader.onprogress = (e) =>setLoad(e.loaded)
              reader.onload = (e) => resolve({
                ...newFile,
                url:e.target.result
              });
              reader.onerror = error => reject(error);
            }else{
              reject(newValid)
            }    
          }else{
            reject("Vui lòng chọn hình để tải lên")
          }   
        });
        promise 
          .then(result=>{
              setValid("")
               handle.set("Url",result.url);
               handle.set("Size",result.size);
          })
          .catch(error=>{
              setValid(error)
               handle.set("Url","");
               handle.set("Size",0);
          })
          .finally(()=>{
              event.target.value = '';
          })
  }
  return(
    <Stack my={2}>
      <div className={styles.container}>
        <i className={clsx("fas fa-image",styles.icon)}></i>
        <Typography>Chọn hoặc kéo thả hình ảnh</Typography>
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
      <FormControl >
        <Slider 
          min={0} 
          value={load || 0}
          max={file && file.size || 0} 
        />
        {
          (valid !== "") && <FormHelperText>{valid}</FormHelperText>
          || <Stack direction="row" spacing={2}>
              <Typography component="small">
                Đang tải: {formatByte(load)}
              </Typography>
              <Typography component="small">
                Tổng: {formatByte(file && file.size || 0)}
              </Typography>
            </Stack>
        }
      </FormControl>
    </Stack>
  )
}
export default memo(InfoInput);
  
