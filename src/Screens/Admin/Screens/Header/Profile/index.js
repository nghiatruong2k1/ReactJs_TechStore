import {memo,useState,useRef,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Tooltip,IconButton,Avatar} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import Navbar from "./Navbar";
function Profile({...props}){
  const {auth} = useContext(global.config.AppContext);
  const [isOpen,setOpen] = useState(false);
  const buttonRef = useRef(null);
  return(
  <Grid item {...props}>
    <IconButton 
          ref={buttonRef}
          onClick={()=>{setOpen(true)}}     
          className={styles.button}>
        <Avatar variant="outlined" src={auth.state.user && auth.state.user.ImageUrl} className={styles.avatar}/>
    </IconButton>
    <Navbar 
      open={buttonRef.current && isOpen} 
      onClose={()=>{setOpen(false)}} 
      anchorEl={buttonRef.current} 
    />
  </Grid>
  )
}
export default memo(Profile);