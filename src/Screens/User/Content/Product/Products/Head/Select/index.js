import {memo} from 'react';
import {Select,MenuItem,FormControl} from '@mui/material/';
import styles from './styles.module.css';
function SearchSelect({...props}){
  const argsType = []
  return(
    <FormControl className={styles.control}>
      <Select size="small"
          displayEmpty
          fullWidth
          disableUnderline
          SelectDisplayProps={{
            className:styles.display
          }}
          renderValue={(selected) => {
            if (selected) {
              return argsType.find(type=>(type.value == selected)).text;
            }
            return "--Select sort--";
         }}>
        {
          argsType.map(function(type,index){
            return(
              <MenuItem key={index} value={type.value}>{type.text}</MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}
export default memo(SearchSelect);