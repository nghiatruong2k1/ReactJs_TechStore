import {memo,useMemo} from 'react';
import {InputAdornment,Select,MenuItem,FormControl} from '@mui/material/';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>{
  return {
    menu:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    }
  }}
);
function SearchSelect({value,onChange,...props}){
  const styles = useStyles();
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
  <InputAdornment position="end" sx={{color:'inherit !important'}}>
    <FormControl fullWidth variant="standard">
      <Select size="small"
          sx={{color:'inherit !important'}}
          displayEmpty
          fullWidth
          disableUnderline
          value={value || ""}
          onChange={(e,o)=>{onChange && onChange(e,o.props.value)}}
          SelectDisplayProps={{
            sx:{
              textAlign:'center',
              background:'transparent'
            }
          }}
          MenuProps={{
            MenuListProps:{
              className:styles.menu,
              sx:{
                p:1
              }
            }
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