import {memo,forwardRef} from 'react';
import {Grid,Button,Tooltip,Typography} from '@mui/material/';
import {NavLink} from "react-router-dom";
import styles from './styles.module.css';

import CartButton    from "./Cart/";
import ProfileButton from "./Profile/";
import MessageButton from "./Message/";
import OrderButton   from "./Order/";
import LoginButton   from "./Login/";

import Provider from "./provider";
export const OptionButton = forwardRef(({children,show,...props}, ref)=>{
  if(show){
    const {title,icon,to,loading,onClick} = props;
    const {state,handle} = props;
    return(
      <Provider state={state} handle={handle}>
            <Grid item xs sm={2} className={styles.option}>
              <Tooltip 
                PopperProps={{sx:{display:{xs:'block', md:'none'}}}} 
                placement="top"
                title={title || ""}
                arrow
              >
                <span>
                  <Button ref={ref} onClick={onClick} component={NavLink} to={to || "#"} className={styles.button}>
                    {icon}
                    <Typography sx={{display:{xs:"none","md":"block"}}} component="small" className={styles.text}>{title}</Typography>
                  </Button>
                </span>
              </Tooltip>  
              {children}
          </Grid>
      </Provider>
    )
  }else{
    return <></>
  }
})


function HeaderOption({...props}){
  return(
    <Grid item {...props}>
      <Grid container wrap="nowrap" justifyContent="flex-end">
          <ProfileButton/>
          <MessageButton/>
          <LoginButton/>
          <OrderButton/>
          <CartButton/>
      </Grid>
    </Grid>
  )
}
export default memo(HeaderOption);