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
export const OptionButton = forwardRef(({children,...props}, ref)=>{
  const {title,icon,to,show,onClick} = props;
  const {state,handle} = props;
  return(
    <Provider state={state} handle={handle}>
      {
        show && (
          <Grid item className={styles.option}>
            <Tooltip 
              PopperProps={{sx:{display:{xs:'block', md:'none'}}}} 
              placement="top"
              title={title || ""}
              arrow
            >
              <Button ref={ref} onClick={onClick} component={NavLink} to={to || "#"} className={styles.button}>
                {icon}
                <Typography sx={{display:{xs:"none","md":"block"}}} component="small" className={styles.text}>{title}</Typography>
              </Button>
            </Tooltip>  
            {children}
        </Grid>
        ) || <></>
      }
    </Provider>
  )
})


function HeaderOption({...props}){
  return(
    <Grid item {...props}>
      <Grid container wrap="nowrap" justifyContent="flex-end">
          <ProfileButton />
          <MessageButton />
          <LoginButton />
          <OrderButton />
          <CartButton />
      </Grid>
    </Grid>
  )
}
export default memo(HeaderOption);