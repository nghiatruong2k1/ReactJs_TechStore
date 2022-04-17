import {memo,useState,useContext,useEffect} from 'react';
import clsx from 'clsx';
import {Paper,FormControl,TextField,Typography,Tooltip,InputAdornment,IconButton,Checkbox} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';


import {CartContext} from "../provider";
function validateCode(value){
    if(value == ""){
      return "Vui lòng nhập mã giảm giá"
    }
    const regex = /[^a-zA-Z0-9]/g;
    if(regex.test(value)){
      return "Mã giảm giá chỉ bao gồm a-z,A-Z,0-9" 
    }
    if(value.length != 10){
      return "Mã giảm giá có độ dài 10 kí tự" 
    }

    return ""
}
function VoucherCode({...props}){
  const {state,dispath} = useContext(CartContext);
  const [value,setValue] = useState("");
  const [valid,setValid] = useState("");
  const Fetch = global.config.useFetch();
  const {toast} = useContext(global.config.context);
  useEffect(function(){
    console.log(state.voucher)
    if(state.voucher){
      setValue(state.voucher.Code ?? "")
    }
  },[state.voucher])
  function handleSubmit(e){
    e.preventDefault();
    let newValid = validateCode(value);
    if(newValid == ""){
      Fetch.get({
        api:"api/ordervoucher",
        params:{code:value},
        onThen:function(result){
          dispath({key:"set",payload:{voucher:result.data}})
          toast.handle.add({message:"Áp dụng mã giảm giá thành công!",type:"success"})
        },onError:function(error){
          if(error.response && error.response.status == 404){
            setValid("Mã giảm giá không hợp lệ!")
          }
        }
      })
    }
    setValid(newValid)
  }
  function handleChange(e){
    if(state.voucher){
      dispath({key:"set",payload:{voucher:null}})
    }
    setValue(e.target.value)
  }
  function handleFocus(e){
    //setValid("");
  }
  function handleBlur(e){
    let newValid = validateCode(value);
    setValid(newValid)
  }
  return(
   <Paper  sx={{p:2,flex:1}}>
    <FormControl component="form" onSubmit={handleSubmit} fullWidth>
        <Typography>Mã giảm giá:*</Typography>
        <TextField 
          placeholder="Nhập mã giảm giá" 
          fullWidth
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          size="small"
          error={Boolean(valid)}
          helperText={valid}
          InputProps={{
            startAdornment:(
              <InputAdornment position="start">             
                <i className="fas fa-ticket-alt"></i>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip placement="top" title="Áp dụng" arrow>
                  <IconButton type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </IconButton>
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