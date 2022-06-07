import {memo,useContext} from 'react';
import {useCookies} from 'react-cookie';
import {Stack,Typography,Link} from '@mui/material/';

import LinkTo from "../../Components/LinkTo/";
import FormProvider from "../../Components/FormProvider/";
import InputEmail from "../../Components/InputEmail/";
import InputPassword from "../../Components/InputPassword/";
import InputCheckbox from "../../Components/InputCheckbox/";
import LinkSetAction from "../../Components/LinkSetAction/";
import SubmitButton from "../../Components/SubmitButton/";
import FacebookButton from "../../Components/FacebookButton/";
import GoogleButton from "../../Components/GoogleButton/";
import {getRoute} from "../../../../Config/Route/"
import { useFetch } from '../../../../Config/Fetch/';
const rules = {
    Email:{
      isRequired:["Vui lòng nhập Email!"],
      isEmail:[null,["gmail.com"]]
    },Password:{
      isRequired:["Vui lòng nhập mật khẩu!"]
    },RePassword:{
      isRequired:["Vui lòng nhập xác thực mật khẩu!"],
      isConfirm:["Password","Xác thực mật khẩu không hợp lệ!"]
    },IsAgree:{
      isRequired:["Vui lòng đọc và đồng ý điều khoản sử dụng!"]
    }
}
function FormRegister({...props}){
  const Fetch = useFetch();
  const {auth,toast} = useContext(global.config.AppContext);
  
  function handleSubmit({IsAgree,RePassword,...values},handle){
    Fetch.post({
      api:"api/auth/register",
      params:{...values,Id:0},
      onThen:function(result){
        if(result.data.token){
          auth.handle.login(result.data.token);
          auth.handle.close(); 
        }
      },onError:function(error){
      },onEnd:function(){
        handle.end();
      }
    })
  }

  return(
    <FormProvider onSubmit={handleSubmit} rules={rules}>
      <Stack spacing={1} sx={{
        px:{xs:0,sm:6,md:8,lg:10}
      }}>
        <InputEmail 
          name="Email"
          title="Email"
          placeholder="Nhập Email"
        />
        <InputPassword 
          name="Password"
          title="Mật khẩu"
          placeholder="Nhập mật khẩu"
        />
        <InputPassword 
          name="RePassword"
          title="Xác thực mật khẩu"
          placeholder="Nhập xác thực mật khẩu"
        />
        <InputCheckbox 
          name="IsAgree" 
          label={
            <LinkTo 
              beforeText="Bạn đồng ý với"
              text="điều khoản và chính sách sử dụng"
              underline="none" 
              to={getRoute("user","about","dieu-khoan-va-chinh-sach")}
            > 
            </LinkTo>
          } />
        <SubmitButton> Đăng ký </SubmitButton>
        <Typography>
          <LinkSetAction beforeText="Bạn đã có tài khoản?" text="Đăng nhập" action="login" />
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