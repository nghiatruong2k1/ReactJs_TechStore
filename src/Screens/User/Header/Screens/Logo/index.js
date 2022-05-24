import {memo} from 'react';
import {Grid} from '@mui/material/';
import {NavLink} from "react-router-dom";
import styles from './styles.module.css';

import {Frame,Image} from "../../../../../Components/";
function HeaderLogo({fixed,...props}){
  return(
    <Grid item {...props}>
      <Frame component={NavLink} to="/" className={styles.button}>
        <Image contain className={styles.logo} src="/images/logo.png" />
      </Frame>
    </Grid>
  )
}
export default memo(HeaderLogo);