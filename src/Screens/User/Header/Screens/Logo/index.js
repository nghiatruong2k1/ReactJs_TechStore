import {memo} from 'react';
import {Grid, useMediaQuery} from '@mui/material/';
import {NavLink} from "react-router-dom";
import styles from './styles.module.css';
import {OptionButton} from "../../Components/";
import {Frame,Image} from "../../../../../Components/";
function HeaderLogo({fixed,...props}){
  const isMd = useMediaQuery((theme)=>(theme.breakpoints.up("366")));
  return(
    <Grid item {...props}>
      {
        isMd && (
          <Frame component={NavLink} to="/" className={styles.button}>
            <Image contain className={styles.logo} src="/images/logo.png" />
          </Frame> 
        ) ||(  
          <OptionButton
            to="/"
            title={"Trang chủ"}
            icon={(<span className={"fas fa-home"}/>)}
            {...props}
          />
        )
      }
    </Grid>
  )
}
export default memo(HeaderLogo);