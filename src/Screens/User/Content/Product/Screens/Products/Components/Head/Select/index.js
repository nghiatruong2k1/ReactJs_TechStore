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
      feild:"Name_desc",
      text:"Tên giảm dần",
    },{
      feild:"Name",
      text:"Tên tăng dần",
    },{
      feild:"Price_desc",
      text:"Giá giảm dần",
    },{
      feild:"Price",
      text:"Giá tăng dần",
    }]
  },[]);
  const selectIndex = useMemo(function(){
    const index = argsType.findIndex(function(type){
      return type.feild == state.sort
    })
    if(index >= 0){
      return index
    }else{
      return 0
    }
  },[state.sort]);

  function handleChange(event,obj){
    const newSort = argsType[Number(obj.props.value)];
    dispath(["set_sort",newSort.value])
  }
  return(
    <FormControl className={styles.control}>
      <Select size="small"
          displayEmpty
          fullWidth
          SelectDisplayProps={{
            className:styles.display
          }}
          value={selectIndex}
          onChange = {handleChange}
          renderValue={(selected) => {
            const select = argsType[selected];
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
                <MenuItem key={index+1} value={index}>{type.text}</MenuItem>
              )
            })
          }
      </Select>
    </FormControl>
  )
}
export default memo(SearchSelect);