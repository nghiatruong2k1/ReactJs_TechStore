import {memo,useContext} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Button,Stack,Paper} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import DialogResult from "./DialogResult/";
function Buttons({...props}){
  const [cookies,setCookies] = useCookies();
  const {cart} = useContext(global.config.UserContext);
  const {auth,toast} = useContext(global.config.context);
  const Fetch = global.config.useFetch();
  function handleOrderClick(){
    if(Boolean(cookies['token'])){
      console.log(cart.state.datas)
      const newCart = cart.state.datas.filter(function(data){
        if(data){
          return data;
        }
      })
      if(newCart.length > 0){
        DialogResult({
          totalItem:cart.handle.getCount(),
          totalPrice:cart.handle.getPrice(),
          onYes:function(){
            Fetch.post({
              api:"api/order",
              params:newCart,
              onThen:function(result){
                cart.handle.reset();
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
    <Paper sx={{p:2}}>
      <Stack direction="row" alignItems="center" justifyContent = 'space-between'>
        <Button color="secondary" variant="contained" startIcon={<i className="fas fa-chevron-left"></i>}>Quay lại</Button>
        <Button onClick={handleOrderClick} color="success"variant="contained" endIcon={<i className="fas fa-chevron-right"></i>}>Thanh toán</Button>
      </Stack>
    </Paper>
  )
}
export default memo(Buttons);