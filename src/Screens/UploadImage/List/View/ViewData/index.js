import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Card,Radio} from '@mui/material/';
import {} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../Components/";
import styles from './styles.module.css';

import {ListContext} from "../../provider";
function ViewItem({...props}){
  const {state} = useContext(ListContext);
  const {uploadImage} = useContext(global.config.context);
  function handleClick(data){
    uploadImage.handle.select(data)
  }
  return(
  <>
  {
    state.datas.map((data,index)=>{
      const isActive = uploadImage.state.select.Id == data.Id;
      return (    
        <Grid key={index} item xs={2}{...props}>
          <Card onClick={()=>(handleClick(data))} 
            className={clsx({[styles.active]:isActive})}
          >
            <Frame square>
              <Image contain src={data && data.Url}/>
              <Radio className={styles.radio} checked={isActive}/>
            </Frame>
          </Card>
        </Grid>
      )
    })
  }
  </>
  )
}
export default memo(ViewItem);