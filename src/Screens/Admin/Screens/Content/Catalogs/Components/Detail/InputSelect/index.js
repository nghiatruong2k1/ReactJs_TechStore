import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Typography,FormControl,FormHelperText,Select,MenuItem} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function InputSelect({left,right,name,nameValue,nameText,value,onChange,valid,onValid,values=[],label,placeholder,disabledEmpty,...props}){
  return(
  <>
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
      <FormControl fullWidth>
        <Select
          fullWidth
          displayEmpty
          value={value || 0}
          onChange={(e)=>(onChange && onChange(e,e.target.value))}
          size="small"
          renderValue={() => {
            let selectValue = values.find(c=>c[nameValue] == value);
            if(selectValue){
                return selectValue[nameText]
            }
            return "--"+(placeholder ?? label ?? "")+"--";
         }}
       >
         {
           (disabledEmpty == false) && (
            <MenuItem
              key={0}
              value={0}
            >
            {"--"+(placeholder ?? label ?? "")+"--"}
          </MenuItem>
           )
         }
         {values.map((value,index) => (
           <MenuItem
             key={index+1}
             value={value[nameValue]}
           >
             {value[nameText]}
           </MenuItem>
         ))}
       </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
       <FormHelperText component="small" error>{valid ?? ""}</FormHelperText> 
      </Grid>
    </Grid>
  </>
  )
}
export default memo(InputSelect);