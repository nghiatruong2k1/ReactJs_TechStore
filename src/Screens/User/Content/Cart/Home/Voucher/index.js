import {memo,useState,useContext,useEffect} from 'react';
import {Grid,Paper,FormControl,TextField,Typography,Tooltip,InputAdornment,IconButton} from '@mui/material/';
import { useFetch } from '../../../../../../Config/Fetch';
import {CartContext} from "../provider";
import {checkValue} from "../../../../../../Config/Validate";
const ruler = {
  isRequired:["Vui lòng nhập mã giảm giá"],
  isRegex:[/[^a-zA-Z0-9]/g,"Mã giảm giá chỉ bao gồm a-z,A-Z,0-9"],
  isLength:[10,"Mã giảm giá có độ dài {1} kí tự"]
}


function VoucherCode({...props}){
  const {state,dispath} = useContext(CartContext);
  const [value,setValue] = useState("");
  const [valid,setValid] = useState("");
  const Fetch = useFetch();
  useEffect(function(){
    if(state.voucher){
      setValue(state.voucher.Code ?? "")
    }
  },[state.voucher])
  async function handleSubmit(e){
    e.preventDefault();
    let check = checkValue(value,ruler,{},function(valids){
      setValid(valids[0] || "");
      return valids.length > 0 ? 1 : 0;
    });
    if(check === 0){
      return await Fetch.get({
        api:"api/ordervoucher",
        params:{code:value},
        onThen:function(result){
          setValid("");
          dispath(["set_voucher",result.data.value])
        },onError:function(error){
          dispath(["set_voucher",null]);
          if(error.response && error.response.status == 404){
            setValid("Có lỗi xãy ra!");
          }
        }
      })
    }
  }
  function handleChange(e){
    if(state.voucher){
      dispath(["set_voucher",null])
    }
    setValue(e.target.value)
  }
  function handleFocus(e){
    setValid("");
  }
  function handleBlur(e){
    let newValid = checkValue(value,ruler);
    setValid(newValid[0] || "")
  }
  return(
  <Grid item {...props}>
   <Paper sx={{p:1,height:"100%"}}>
    <FormControl component="form" onSubmit={handleSubmit} fullWidth>
        <Typography>Mã giảm giá:</Typography>
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
  </Grid>
  )
}
export default memo(VoucherCode);