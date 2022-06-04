import {memo} from 'react';
import {Input} from '@mui/material/';
import styles from './styles.module.css';
function SearchInput({value,onChange,startAdornment,endAdornment,...props}){
  return(
   <Input 
      className={styles.container} 
      required
      disableUnderline
      placeholder="Tìm kiếm..."
      inputProps={{
        className:styles.input
      }}
      value={value || ""}
      onChange={(e)=>{onChange && onChange(e,e.target.value)}}
      autoComplete="on"
      variant="standard"
      type="search"
      sx={{flex:1}}
    />
  )
}
export default memo(SearchInput);