import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import Provider from "./provider";
import DetailHead from "./Head/";
import DetailInfo from "./Info/";
function ProductDetail({title,...props}){
  return(
    <Provider>
      <DetailHead title={title}/>
      <DetailInfo xs={12}/>
    </Provider>
  )
}
export default memo(ProductDetail);