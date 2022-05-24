import {memo,useContext,useEffect,useState,useMemo} from 'react';
import {InputAdornment,Select,MenuItem,FormControl} from '@mui/material/';
import styles from './styles.module.css';
import {SearchContext} from "../provider";

function SearchSelect({value,onChange,...props}){
  const controllers = useMemo(function(){
    return [{
        value:"product",
        text:"Sản phẩm"
      },{
        value:"category",
        text:"Danh mục"
      },{
        value:"brand",
        text:"Thương hiệu"
      },{
        value:"post",
        text:"Bài viết"
      },{
        value:"topic",
        text:"Chủ đề"
      }]
  },[])
  return(
  <InputAdornment position="end">
    <FormControl className={styles.control} fullWidth variant="standard">
      <Select size="small"
          displayEmpty
          fullWidth
          disableUnderline
          value={value}
          onChange={(e,o)=>{onChange && onChange(e,o.props.value)}}
          SelectDisplayProps={{
            className:styles.display
          }}
          renderValue={(selected) => {
            const controller = controllers.find((i)=>{
              return i.value == value
            })     
            if(controller){
              return controller.text
            }else{
              onChange && onChange({},controllers[0].value)
            }
         }}>
        {
          controllers.map(function(type,index){
            return(
              <MenuItem key={index} value={type.value}>{type.text}</MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  </InputAdornment>
  )
}
export default memo(SearchSelect);