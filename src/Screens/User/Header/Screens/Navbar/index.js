import {memo} from 'react';
import {Grid,Divider} from '@mui/material/';
import styles from './styles.module.css';
import LeftNav from "./Left/";
import RightNav from "./Right/";
import ToggleNav from "./Toggle/";

function Navbar(props){
  return(
    <Grid item {...props}>
      <Divider sx={{display:{xs:'none',lg:'flex'}}}/>
      <Grid 
        container py={0.5} 
        className={styles.navbar} 
        component="nav"
        sx={{display:{xs:'none',lg:'flex'}}}
      >
        <LeftNav />
        <RightNav />
      </Grid>
      <ToggleNav boxProps={{sx:{display:{xs:'inline-flex',lg:'none'}}}}/>
    </Grid>
  )
}
export default memo(Navbar);