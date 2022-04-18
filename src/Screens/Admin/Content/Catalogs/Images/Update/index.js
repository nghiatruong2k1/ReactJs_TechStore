import {memo} from 'react';
import styles from './styles.module.css';


import DetailContent from "../Detail/";
import Provider from "./provider";
function ImageUpdate({...props}){
  return(
    <Provider>
      <DetailContent title="Update image"/>
    </Provider>
  )
}
export default memo(ImageUpdate);