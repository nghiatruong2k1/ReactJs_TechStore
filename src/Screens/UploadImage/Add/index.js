import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import DetailContent from "../Detail/";
import Provider from "./provider"
function ImageAdd({...props}){
  return(
    <Provider>     
      <DetailContent/>
    </Provider>
  )
}
export default memo(ImageAdd);