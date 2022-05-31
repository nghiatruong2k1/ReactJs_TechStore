import {memo,useContext} from 'react';
import clsx from 'clsx';
import PropTypes from "prop-types";
import {TableCell,Typography,Skeleton,TextField} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function CellText({enableEdit,onChange,name,data,sx,loading,text,...props}){
  if(enableEdit){
    <TextField 
      fullWidth
      disabled={loading}
      value={data && data[name] || text || ""}
      onChange={(e)=>{
        if(data){
          data[name] = e.target.value
          onChange && onChange(data);
        }
      }}
    />
  }else{
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
}
CellText.propTypes = {
  text:PropTypes.string
}
CellText.defaultProps = {
  text:""
}
export default memo(CellText);