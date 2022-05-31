import {memo,useContext,useMemo} from 'react';
import clsx from 'clsx';
import {Grid,Card,Radio,IconButton,Tooltip} from '@mui/material/';
import {} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../Components/";
import styles from './styles.module.css';
import { useFetch } from '../../../../../Config/Fetch/';
import {UploadImageContext} from "../../../provider";
import {ListContext} from "../../provider";
function ViewItem({data,loading,...props}){
  const {select,setSelect} = useContext(UploadImageContext);
  const {image} = useContext(global.config.AppContext);
  const {handle} = useContext(ListContext);
  const Fetch = useFetch();
  const isActive = useMemo(function(){
    if(data){
      if(select){
        return select.Id  == data.Id
      }else if(image.config.defaultData){
        return image.config.defaultData.Id == data.Id
      }
    }
    return false;
  },[data,image.config.defaultData,select])
  function handleClick(){
    data && setSelect(data)
  }
  function handleDelete(){
    data && Fetch.delete({
      api:"api/admin/image/"+data.Id,
      message:"Bạn có muốn xóa vĩnh viễn hình ảnh này!",
      onEnd:function(){
        handle.get({});
        if(isActive){
          setSelect(null)
        }
      }
    })
  }
  return (    
    <Grid item xs={2}{...props}>
    <Tooltip title={data && data.Name || "Đang cập nhật"} arrow>
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
    </Tooltip>
    </Grid>
  )
}
export default memo(ViewItem);