import {memo,useMemo,useState,useContext} from 'react';
import {Select,MenuItem,FormControl} from '@mui/material/';
import styles from './styles.module.css';

import {ProductsContext} from "../../../init";
function SearchSelect({...props}){
  const {state,dispath} = useContext(ProductsContext)
  const argsType = useMemo(function(){
    return [{
      feild:"",
      text:"--Chọn sắp xếp--",
    },{
      feild:"Name_Desc",
      text:"Tên giảm dần",
    },{
      feild:"Name",
      text:"Tên tăng dần",
    },{
      feild:"Price_Desc",
      text:"Giá giảm dần",
    },{
      feild:"Price",
      text:"Giá tăng dần",
    }]
  },[]);

  function handleChange(event,obj){
    dispath(["set_sort",obj.props.value])
  }
  return(
    <FormControl className={styles.control}>
      <Select size="small"
          displayEmpty
          fullWidth
          SelectDisplayProps={{
            className:styles.display
          }}
          value={state.sort}
          onChange = {handleChange}
          renderValue={(selected) => {
            const select = argsType.find((type)=>{
              return type.feild == selected;
            });
            if(select){
              return select.text;
            }else{
              return argsType[0].text
            }
         }}
      >
          {
            argsType.map(function(type,index){
              return(
                <MenuItem key={index+1} value={type.feild}>{type.text}</MenuItem>
              )
            })
          }
      </Select>
    </FormControl>
  )
}
export default memo(SearchSelect);