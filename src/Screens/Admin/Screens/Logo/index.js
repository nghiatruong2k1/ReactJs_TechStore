import {memo}       from 'react';
import clsx         from 'clsx';
import {}           from '@mui/material/';
import {}           from '@mui/icons-material/';
import styles       from './styles.module.css';
import {Frame,Image}from "../../../../Components/";
import {NavLink}    from "react-router-dom";
function Logo({...props}){
  const {getRoute} = global.config.useRoute();
  return(
    <Frame component={NavLink} to={"/"} className={styles.container}>
      <Image contain src="/images/logo.png"/>
    </Frame>
  )
}
export default memo(Logo);