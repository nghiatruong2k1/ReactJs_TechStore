import {memo,useContext,useEffect,useState,useMemo} from 'react';
import {Select,MenuItem,FormControl} from '@mui/material/';
import styles from './styles.module.css';
import {SearchContext} from "../provider";
const controllers = [{
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
function SearchSelect({...props}){
  const {state,handle} = useContext(SearchContext)
  const [select,setSelect] = useState(0); 
  useEffect(()=>{
    handle.set('controller',controllers[select].value)
  },[select])
  function handleChange(event,obj){
    setSelect(obj.props.value)
  }
  return(
    <FormControl className={styles.control} variant="standard">
      <Select size="small"
          displayEmpty
          fullWidth
          disableUnderline
          value={select}
          onChange={handleChange}
          SelectDisplayProps={{
            className:styles.display
          }}
          renderValue={(selected) => {
            return controllers[selected].text;     
         }}>
        {
          controllers.map(function(type,index){
            return(
              <MenuItem key={index} value={index}>{type.text}</MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}
export default memo(SearchSelect);