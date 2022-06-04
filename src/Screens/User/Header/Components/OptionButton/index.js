import {memo,useMemo,forwardRef,createContext,useImperativeHandle,useRef} from 'react';
import {Box,Button,IconButton,Tooltip,Typography} from '@mui/material/';
import clsx from 'clsx';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import useStyles from "./styles";

export const OptionContext = createContext();
const OptionButton = forwardRef((
    {children,state,dispath,title,icon,loading,sx,boxProps,...props}
,ref)=>{
  const styles = useStyles();
  return(
      <OptionContext.Provider value={{state,dispath}}>
        <Box {...boxProps} 
          sx={{...styles.option,...boxProps.sx}}
          className={clsx(boxProps.className)}
        >
          <Tooltip 
            PopperProps={{sx:{display:{xs:'block', lg:'none'}}}} 
            placement="top"
            title={title || ""}
            arrow
          >
            <Box component="span">
              <Button 
                 ref={ref}
                 component={props.to && NavLink || "button"}  
                 sx={{...styles.button,...sx}} 
                 {...props}
               >
                 <Box component="span" sx={{...styles.icon}}>{icon}</Box>
                 <Typography sx={{...styles.text}} >{title}</Typography>
               </Button>
            </Box>
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