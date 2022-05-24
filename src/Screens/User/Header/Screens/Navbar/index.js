import {memo} from 'react';
import {Grid,Divider} from '@mui/material/';
import styles from './styles.module.css';
import LeftNav from "./Left/";
import RightNav from "./Right/";
import ToggleNav from "./Toggle/";

function Navbar({fixed,...props}){
  return(
    <Grid item {...props}>
      <Divider sx={{display:{xs:'none',lg:fixed && 'none' || 'flex'}}}/>
      <Grid 
        container py={0.5} 
        className={styles.navbar} 
        component="nav"
        sx={{display:{xs:'none',lg:fixed && 'none' || 'flex'}}}
      >
        <LeftNav />
        <RightNav />
      </Grid>
      <ToggleNav boxProps={{sx:{display:{xs:'inline-flex',lg:fixed && 'inline-flex' || 'none'}}}}/>
    </Grid>
  )
}
export default memo(Navbar);