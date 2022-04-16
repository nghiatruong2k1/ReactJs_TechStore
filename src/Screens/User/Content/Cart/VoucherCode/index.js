import {memo} from 'react';
import clsx from 'clsx';
import {Paper,FormControl,TextField,Typography,Tooltip,InputAdornment,IconButton,Checkbox} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function VoucherCode({...props}){
  return(
   <Paper  sx={{p:2,flex:1}}>
    <FormControl fullWidth>
        <Typography>Mã giảm giá:</Typography>
        <TextField 
          placeholder="Nhập mã giảm giá" 
          fullWidth
          size="small"
          InputProps={{
            startAdornment:(
              <InputAdornment position="start">
                <i className="fas fa-ticket-alt"></i>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip placement="top" title="Áp dụng" arrow>
                  <Checkbox />
                </Tooltip>
              </InputAdornment>
            )
          }}
        />
    </FormControl>
  </Paper>
  )
}
export default memo(VoucherCode);