import {memo,useContext} from 'react';
import clsx from 'clsx';
import PropTypes from "prop-types";
import {TableCell,Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {formatDate} from "../../../../../../../../../../../Config/Format/";
function CellDatetime({name,format,data,sx,loading,text,...props}){
  return(
      <Typography name={name} whiteSpace = 'nowrap'sx={{flex:1,...sx}} {...props}>
        {!loading ?
          (
            formatDate(data && data[name] || text || "",format)
          ) 
          : <Skeleton variant="text" className="skeleton" />
        }
      </Typography>
    )
}
CellDatetime.propTypes = {
  text:PropTypes.string
}
CellDatetime.defaultProps = {
  text:""
}
export default memo(CellDatetime);