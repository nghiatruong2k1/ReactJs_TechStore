import {memo} from 'react';
import {Grid,Divider} from '@mui/material/';
import styles from './styles.module.css';
import LeftNav from "./Left/";
import RightNav from "./Right/";

function Navbar({...props}){
  return(
    <Grid item {...props}>
      <Divider />
      <Grid container py={1} className={styles.navbar} component="nav">
        <LeftNav />
        <RightNav />
      </Grid>
    </Grid>
  )
}
export default memo(Navbar);