import {memo,useState,useEffect,useMemo} from 'react';
import PropTypes from "prop-types";
import clsx from 'clsx';
import styles from "./styles.module.css";
import {TableCell} from '@mui/material/';
import CheckboxType from "./Checkbox/";
import ImageType from "./Image/";
import TextType from "./Text/";
import OptionType from "./Option/";
import NumberType from "./Number/";
import DatetimeType from "./Datetime/";

function Cell({title,type,data,display,cellProps:{sx,className,...cellProps},...props}){
  const Component = useMemo(function(){
    switch(type){
      case 'checkbox':{
        return CheckboxType
      }
      case 'image':{
        return ImageType
      }
      case 'number':{
        return NumberType
      }
      case 'datetime':{
        return DatetimeType
      }
      case 'option':{
        return OptionType
      }
      default:{
        return TextType;
      }
    }
  },[type])
  if(display && display.hidden){
    return <></>
  }else{
    return(
      <TableCell
        align="center"
        type={type}
        sx={{whiteSpace:'nowrap',...sx}} 
        className={clsx(className,styles.cell,{[styles.title]:title})}
        {...cellProps}
      >
        <Component data={data} {...display} {...props}/>
      </TableCell>
    )
  }
}

Cell.propTypes = {
  type:PropTypes.string,
  data:PropTypes.object,
  display:PropTypes.object,
  cellProps:PropTypes.object,
  title:PropTypes.bool
}
Cell.defaultProps = {
  type:"text",
  data:{},
  display:{},
  cellProps:{},
  title:false
}
export default memo(Cell);