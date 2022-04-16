import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';


import DetailContent from "../Detail/";
import {DetailDataContext} from "../Detail/provider";
import Provider from "./provider";
function ImageUpdate({...props}){
  return(
    <Provider>
      <DetailContent title="Update image"/>
    </Provider>
  )
}
export default memo(ImageUpdate);