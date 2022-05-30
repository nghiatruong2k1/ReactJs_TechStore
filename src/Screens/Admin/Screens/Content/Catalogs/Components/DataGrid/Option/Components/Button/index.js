import {memo,forwardRef} from 'react';
import {NavLink}         from'react-router-dom';
import PropTypes from "prop-types";
import clsx from 'clsx';
import {
  Tooltip,
  IconButton,
  SvgIcon
} from '@mui/material/';

const OptionButton = forwardRef(function({hidden,title,icon,children,loading,className,...props},ref){
  if(!hidden){
    return(
      <Tooltip title={title} placement="top" arrow>
        <span ref={ref}>
          <IconButton 
            className={clsx({[className]:className})}
            disabled={loading}
            {...props}
            component={props.to  && NavLink || "button"}
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
  hidden:PropTypes.bool
}
OptionButton.defaultProps = {
  hidden:false
}
export default memo(OptionButton)