import {memo,useContext,useEffect,useState} from 'react';
import clsx from 'clsx';
import {Grid,Card,TextField,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {Frame,Image} from "../../../../../../../../Components/";
import {DetailInfoContext} from '../provider';
function ImageView({left,right,...props}){
  const {data} = useContext(DetailInfoContext);
  return(
    <Card>
      <Frame square>
        <Image 
          contain 
          alt={data.handle.get("name","")} 
          src={data.handle.get("url","")}
        />
      </Frame>
    </Card>
  )
}
export default memo(ImageView);