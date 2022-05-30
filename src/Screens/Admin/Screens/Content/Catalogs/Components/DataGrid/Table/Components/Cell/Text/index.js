import {memo,useContext} from 'react';
import clsx from 'clsx';
import PropTypes from "prop-types";
import {TableCell,Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function CellText({name,data,sx,loading,text,...props}){
  return(
      <Typography name={name} whiteSpace = 'nowrap' fontWeight = 'inherit'sx={{flex:1,...sx}} {...props}>
        {!loading ?
          (
            data && data[name] || text || ""
          ) 
          : <Skeleton variant="text" className="skeleton" />
        }
      </Typography>
    )
}
CellText.propTypes = {
  text:PropTypes.string
}
CellText.defaultProps = {
  text:""
}
export default memo(CellText);