import {memo,useContext} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Grid,Button,Stack,Paper} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import DialogResult from "./DialogResult/";
import {CartContext} from "../provider";
import {useFetch} from "../../../../../Config/Fetch/";
function Buttons({...props}){
  const {state,dispath} = useContext(CartContext);
  const [cookies,setCookies] = useCookies();
  const {cart} = useContext(global.config.UserContext);
  const {auth} = useContext(global.config.AppContext);
  const {toast} = useContext(global.config.context);
  
  const Fetch =useFetch();
  function handleOrderClick(){
    if(Boolean(cookies['token'])){
      const newCart = cart.state.datas.filter(function(data){
        if(data){
          return data;
        }
      })
      if(newCart.length > 0){
        DialogResult({
          cart:newCart,state,
          onYes:function(){
            Fetch.post({
              api:"api/order",
              params:{
                products:newCart,
                voucher:state.voucher || {}
              },
              onThen:function({data}){
                if(data && data.value){
                  cart.handle.reset();
                }
              }
            })
          }
        });
      }else{
        toast.handle.add({message:"Vui lòng thêm sản phẩm vào giỏ hàng!",type:"warning"});
      }
    }else{
      toast.handle.add({message:"Vui lòng đăng nhập để thanh toán!",type:"warning"});
      auth.handle.open();
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