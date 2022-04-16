import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Typography,Select,MenuItem} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../init";
function InputSelect({left,right,feild,feildValue,feildText,label,placeholder,defaultValue,values=[],...props}){
  const {state,handle} = useContext(DetailContext);
  function handleChange(event,obj){
      handle.change(feild,event.target.value);
  }
  return(
  <>
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <Select
          fullWidth
          displayEmpty
          value={state.data[feild] ?? 0}
          onChange={handleChange}
          size="small"
          renderValue={() => {
            if(state.data[feild]) {
              let selectValue = values.find(c=>c[feildValue] == state.data[feild]);
              if(selectValue){
                return selectValue[feildText]
              }
            }
            return "--"+placeholder ?? label+"--";
         }}
       >
          <MenuItem
             key={0}
             value={0}
           >
            {"--"+placeholder ?? label ?? ""+"--"}
          </MenuItem>
         {values.map((value,index) => (
           <MenuItem
             key={index+1}
             value={value[feildValue]}
           >
             {value[feildText]}
           </MenuItem>
         ))}
       </Select>
      </Grid>
    </Grid>
  </>
  )
}
export default memo(InputSelect);