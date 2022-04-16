import {memo,useRef,useReducer,useContext} from 'react';
import {useCookies} from 'react-cookie';
import clsx from 'clsx';
import {Stack,Typography} from '@mui/material/';
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


function FormLogin({...props}){
  const [cookies,setCookies] = useCookies();
  const Fetch = global.config.useFetch();
  const {toast} = useContext(global.config.context);
  function handleSubmit(event,{element,value}){
    const {Save,...Account} = value;
    Fetch.post({
      api:"api/auth/login",
      params:Account,
      onThen:function(result){
        if(result.data == false){
           toast.handle.add({message:"Email hoặc mật khẩu không chính xác!",type:"warning"})
           toast.handle.add({message:"Đăng nhập không thành công!"})
        }else{   
          setCookies('token', result.data)     
          toast.handle.add({message:"Đăng nhập thành công!"})
        }
      }
    })
  }
  return(
    <FormProvider onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{
        px:{xs:0,sm:6,md:8,lg:12}
      }}>
        <InputEmail 
          name="Email"
          placeholder="Nhập Email"
        />
        <InputPassword 
          name="Password"
          placeholder="Nhập mật khẩu"
        />
        <Stack direction="row" justifyContent = 'space-between' alignItems = 'center'> 
          <InputCheckbox name="Save" label="Lưu tài khoản"/>
          <LinkSetAction action="forgetPassword">Quên mật khẩu</LinkSetAction>
        </Stack>
        <SubmitButton> Đăng nhập </SubmitButton>
        <Typography>
          Bạn chưa có tài khoản?
          <LinkSetAction action="register"> Đăng ký </LinkSetAction>
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
export default memo(FormLogin);