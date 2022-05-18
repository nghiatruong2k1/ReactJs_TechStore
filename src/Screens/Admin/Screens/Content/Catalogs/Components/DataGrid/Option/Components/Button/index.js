import {memo,useContext,forwardRef} from 'react';
import {NavLink}         from'react-router-dom';
import PropTypes from "prop-types";
import clsx from 'clsx';
import {
  Tooltip,
  IconButton,
  SvgIcon
} from '@mui/material/';
import styles from './styles.module.css';

const OptionButton = forwardRef(function({title,icon,children,loading,className,buttonProps,onClick,...props},ref){
  if(!buttonProps.hidden){
    return(
      <Tooltip title={title} placement="top" arrow>
        <span ref={ref} {...props}>
          <IconButton 
            {...buttonProps}
            className={clsx({[className]:className,[buttonProps.className]:buttonProps.className})}
            disabled={loading}
            component={buttonProps.to  && NavLink || "button"}
            onClick={(e)=>{
              onClick && onClick(e);
              buttonProps.onClick && buttonProps.onClick(e)
            }}
          >
            {icon}
          </IconButton>
          {children}
        </span>
      </Tooltip>
    )
  }else{
    return <></>
  }
})
OptionButton.displayName = "OptionButton";
OptionButton.propTypes = {
  buttonProps:PropTypes.object
}
OptionButton.defaultProps = {
  buttonProps:{
    hidden:false
  }
}
export default memo(OptionButton)