import {memo,forwardRef,createContext,useImperativeHandle,useRef} from 'react';
import {Box,Button,IconButton,Tooltip,Typography} from '@mui/material/';
import clsx from 'clsx';
import {NavLink} from "react-router-dom";
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

export const OptionContext = createContext();
const OptionButton = forwardRef((
    {children,className,state,dispath,title,icon,loading,onClick,sx,boxProps,...props}
,ref)=>{
  return(
      <OptionContext.Provider value={{state,dispath}}>
        <Box {...boxProps} 
          className={clsx(boxProps.className,styles.option)}
        >
          <Tooltip 
            PopperProps={{sx:{display:{xs:'block', lg:'none'}}}} 
            placement="top"
            title={title || ""}
            arrow
          >
            <span>
                 <Button 
                    ref={ref} onClick={onClick} 
                    component={props.to && NavLink || "button"}  
                    className={clsx(className,styles.button)}
                    sx={{
                      borderWidth:{xs:"0.1em",lg:0},
                      p:0.5
                      ,fontSize:{xs:'0.6em',sm:'0.7em',md:'0.8em',lg:'0.9em',xl:'1em'}
                      ,width:{xs:'3.5em',lg:'100%'}
                      ,height:{xs:'3.5em',lg:'100%'}
                      ,minWidth:{xs:'auto',lg:'5em'}
                      ,...sx
                    }} 
                    {...props}
                  >
                    <span className={styles.icon}>{icon}</span>
                    <Typography className={styles.text} sx={{display:{xs:"none","lg":"block"}}} >{title}</Typography>
                  </Button>
              </span>
          </Tooltip>  
          {children}
        </Box>
      </OptionContext.Provider>
    )
})

OptionButton.displayName = 'OptionButton';
OptionButton.defaultProps = {
  boxProps:{}
}
export default memo(OptionButton);