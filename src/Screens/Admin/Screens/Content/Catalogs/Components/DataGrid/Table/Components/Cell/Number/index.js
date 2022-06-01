import {memo} from 'react';

import clsx from 'clsx';
import PropTypes from "prop-types";
import {formatNumber} from "../../../../../../../../../../../Config/Format/";
import {Typography,Skeleton,TextField} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function CellNumber({name,format,data,sx,loading,text,enableEdit,onChange,...props}){
  if(enableEdit){
    return(
      <TextField 
        fullWidth
        size="small"
        type="number"
        disabled={loading}
        value={data && data[name] || text || ""}
        onChange={(e)=>{
          if(data){
            data[name] = e.target.value
            onChange && onChange(data);
          }
        }}
      />
    )
  }else{
    return(
      <Typography name={name} whiteSpace = 'nowrap'sx={{flex:1,...sx}} {...props}>
        {!loading ?
          (
            formatNumber(data && data[name] || text || 0,[...format])
          ) 
          : <Skeleton variant="text" className="skeleton" />
        }
      </Typography>
    )
  }
}
CellNumber.propTypes = {
  text:PropTypes.number,
  format:PropTypes.array
}
CellNumber.defaultProps = {
  text:0,
  format:[3,0]
}
export default memo(CellNumber);