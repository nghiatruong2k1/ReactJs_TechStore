import {memo,useContext,useMemo} from 'react';
import clsx from 'clsx';
import {Grid,Card,Radio,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../Components/";
import styles from './styles.module.css';

import {UploadImageContext} from "../../../provider";
import {ListContext} from "../../provider";
function ViewItem({data,loading,...props}){

  const uploadImage = useContext(UploadImageContext);
  const {handle} = useContext(ListContext);
  const Fetch = global.config.useFetch();

  console.log(data,uploadImage.defaultData,uploadImage.state.data)
  const isActive = useMemo(function(){
    if(data){
      if(uploadImage.state.data){
        return uploadImage.state.data.Id  == data.Id
      }else if(uploadImage.defaultData){
        return uploadImage.defaultData.Id == data.Id
      }
    }
    return false;
  },[data,uploadImage.defaultData,uploadImage.state.data])
  function handleClick(){
    data && uploadImage.handle.select(data)
  }
  function handleDelete(){
    data && Fetch.delete({
      api:"api/admin/image/"+data.Id,
      onEnd:function(){
        handle.get({});
        if(isActive){
          uploadImage.handle.select(null)
        }
      }
    })
  }
  return (    
    <Grid item xs={2}{...props}>
      <Card   
        className={clsx(styles.card,{[styles.active]:isActive})}
      >
        <Frame square loading={loading} p={1}>
          <Image onClick={handleClick} contain src={data && data.Url}/>
          <Radio onClick={handleClick} className={styles.radio} checked={isActive ?? false}/>
          <IconButton onClick={handleDelete} className={styles.delete}>
            <span className={clsx("fas fa-times")}></span>
          </IconButton>
        </Frame>
      </Card>
    </Grid>
  )
}
export default memo(ViewItem);