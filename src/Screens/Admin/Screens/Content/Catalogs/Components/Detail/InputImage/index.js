import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Paper,Stack,IconButton,Input} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {Frame,Image} from "../../../../../../../../Components/";
function InputImage({name,value,alt,src,onChange,...props}){
  const {image} = useContext(global.config.AppContext);
  function handleClick(){
    image.handle.open({
      defaultData:{
        Id:value  ?? 0,
        Url:src ?? ""
      },
      onSubmit:function({value:{Id,Url}}){
        onChange && onChange({},{Id,Url});
      }
    });
  }
  return (    
    <Stack>
      <Input sx={{display:'none'}} type="number" value={value ?? 0} />
      <Frame onClick={handleClick} rectangle component={Paper}>
        <Image contain alt={alt ?? ""} src={src ?? ""}/>
      </Frame>
    </Stack>
  )
}
export default memo(InputImage);