import {memo,useContext} from 'react';
import {useCookies} from 'react-cookie';
import clsx from 'clsx';
import {Stack,Typography,Link} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import FormProvider from "../../Components/FormProvider/";
import InputEmail from "../../Components/InputEmail/";
import InputPassword from "../../Components/InputPassword/";
import InputCheckbox from "../../Components/InputCheckbox/";
import LinkSetAction from "../../Components/LinkSetAction/";
import SubmitButton from "../../Components/SubmitButton/";
import FacebookButton from "../../Components/FacebookButton/";
import GoogleButton from "../../Components/GoogleButton/";
function FormRegister({...props}){
  const [cookies,setCookies] = useCookies();
  const Fetch = global.config.useFetch();
  const {toast} = useContext(global.config.context);
  function handleSubmit(event,{element,value}){
    const {IsAgree,RePassword,...Account} = value;
    if(RePassword != Account.Password){
      element.RePassword.setCustomValidity("Nhập lại mật khẩu không chính xác")
    }
    if(IsAgree == false){
      element.IsAgree.setCustomValidity("Vui lòng đồng ý với điều khoản sử dụng")
    }
    // if(Account.Password !== RePassword){
    //   handle.setValid("RePassword","Nhập lại mật khẩu không chính xác")
    // }
    // Fetch.post({
    //   api:"api/auth/register",
    //   params:Account,
    //   onThen:function(result){
    //     if(result.data == false){
    //        toast.handle.add({message:"Email đã tồn tại!",type:"warning"})
    //        toast.handle.add({message:"Đăng ký không thành công!"})
    //     }else{   
    //       setCookies('token', result.data)     
    //       toast.handle.add({message:"Đăng ký thành công!"})
    //     }
    //   }
    // })
  }
  return(
    <FormProvider data = {{}} onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{
        px:{xs:0,sm:6,md:8,lg:10}
      }}>
        <InputEmail 
          name="Email"
          placeholder="Nhập Email"
        />
        <InputPassword 
          name="Password"
          placeholder="Nhập mật khẩu"
        />
        <InputPassword 
          name="RePassword"
          placeholder="Nhập lại mật khẩu"
        />
        <Typography> 
          <InputCheckbox name="IsAgree" label="Bạn đồng ý với " style={{marginRight:'0'}}/>
          <Link underline="none" to="/"> điều khoản và chính sách sử dụng</Link>
        </Typography>
        <SubmitButton> Đăng ký </SubmitButton>
        <Typography>
          Bạn đã có tài khoản?
          <LinkSetAction action="login"> Đăng nhập </LinkSetAction>
        </Typography> 
        <Stack 
          direction="row" 
          justifyContent = 'center' 
          alignItems = 'center'
          spacing={2}
        >
          <FacebookButton />
          <GoogleButton />
        </Stack>
      </Stack>
    </FormProvider>
  )
}
export default memo(FormRegister);