import {memo} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import Navbar from "./Navbar/";
import Content from "./Content/";
function ProfileContent({...props}){
  return(
    <Grid container spacing={1}>
      <Navbar xs={2} md={3}/>
      <Content xs={10} md={9}/>
    </Grid>
  )
}
export default memo(ProfileContent);