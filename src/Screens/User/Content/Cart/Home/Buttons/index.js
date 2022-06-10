import {memo,useContext} from 'react';
import {useSnackbar} from 'notistack';
import {Grid,Paper,Stack,Button} from '@mui/material';

import {CartContext} from "../provider";
import {useFetch} from "../../../../../../Config/Fetch";
import { confirmAlert } from 'react-confirm-alert';
import { makeStyles } from '@mui/styles';

import DialogResult from "./DialogResult";
import MailMes from './MailMes';


const useStyles = makeStyles((theme)=>{
  return {
    paper:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    },content:{
      background:theme.palette.background.default,
      color:theme.palette.text.default
    }
  }}
);

function Buttons({...props}){
  const {state} = useContext(CartContext);
  const {cart:{handle:{reset:resetCart},state:{datas:carts}}} = useContext(global.config.UserContext);
  const {auth:{handle:{open:openAuth},state:{user}}} = useContext(global.config.AppContext);
  const { enqueueSnackbar } = useSnackbar();
  const Fetch =useFetch();
  const confimClass = useStyles();

  function handleOrderClick(){
    if(user){
      const newCart = carts.filter((data)=>(data))
      if(newCart.length > 0){
        confirmAlert({
          customUI: ({onClose}) => (
            <DialogResult 
              classNames={confimClass}
              onClose={onClose} 
              cart={newCart}
              auth={user ?? {}}
              state={state}
              onYes={function(){
                Fetch.post({
                  api:"api/order",
                  params:{
                    products:newCart,
                    voucher:state.voucher || {}
                  },
                  onThen:function({data}){
                    if(data && data.value){
                      resetCart && resetCart();
                      const mes = MailMes({auth:user ?? {},cart:newCart,state,id:data.value});
                      Fetch.post({
                        api:"api/email",
                        params:mes,
                        onThen:function(){
                          enqueueSnackbar({message:"Đã gửi yêu cầu xác nhận đến Email của bạn!",type:"bell"});
                        }
                      })
                    }
                  }
                })
              }}
            />
          )
        })
      }else{
        enqueueSnackbar({message:"Vui lòng thêm sản phẩm vào giỏ hàng!",type:"warning"});
      }
    }else{
      enqueueSnackbar({message:"Vui lòng đăng nhập để thanh toán!",type:"warning"});
      openAuth && openAuth();
    }
  }
  return(
  <Grid item xs {...props}>
    <Paper sx={{p:1,height:"100%"}}>
      <Stack direction="row" height="100%" alignItems="center" justifyContent = 'space-between'>
        <Button color="secondary" variant="contained" startIcon={<i className="fas fa-chevron-left"></i>}>Quay lại</Button>
        <Button onClick={handleOrderClick} color="success"variant="contained" endIcon={<i className="fas fa-chevron-right"></i>}>Thanh toán</Button>
      </Stack>
    </Paper>
  </Grid>
  )
}
export default memo(Buttons);