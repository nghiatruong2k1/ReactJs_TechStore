import {memo}       from 'react';
import {Grid}           from '@mui/material/';
import styles       from './styles.module.css';
import {Frame,Image}from "../../../../../Components";
import {NavLink}    from "react-router-dom";
function Logo({...props}){
  return(
    <Grid item {...props}>
      <Frame component={NavLink} to={"/"} className={styles.container}>
        <Image contain src="/images/logo.png"/>
      </Frame>
    </Grid>
  )
}
export default memo(Logo);