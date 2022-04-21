import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Stack,Button} from '@mui/material/';
import {CloudUpload} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from '../../init';
function PropsUpload(){
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
  return {onClick:handleClick}
}
export default PropsUpload;