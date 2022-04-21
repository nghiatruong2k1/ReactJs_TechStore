import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Card,Radio} from '@mui/material/';
import {} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../Components/";
import styles from './styles.module.css';

import {ListContext} from "../../provider";
function ViewItem({data,loading,...props}){
  const {uploadImage} = useContext(global.config.context);
  function handleClick(){
    data && uploadImage.handle.select(data)
  }
  const isActive = data && (uploadImage.state.select.Id == data.Id);
  return (    
    <Grid item xs={2}{...props}>
      <Card  
        className={clsx({[styles.active]:isActive})}
      >
        <Frame square loading={loading} p={1}>
          <Image contain src={data && data.Url}/>
          <Radio onClick={handleClick} className={styles.radio} checked={isActive ?? false}/>
        </Frame>
      </Card>
    </Grid>
  )
}
export default memo(ViewItem);