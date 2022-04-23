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

const rules = {
    Email:{
      isRequired:["Vui lòng nhập Email!"],
      isEmail:[]
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
  const [cookies,setCookies] = useCookies();
  const Fetch = global.config.useFetch();
  const {auth,toast} = useContext(global.config.context);
  const {checkObject} = global.config.useValidate();
  
  function handleSubmit({IsAgree,RePassword,...values},handle){
    const check = checkObject({IsAgree,RePassword,...values},rules,handle.setValid);
    if(check === 0){
      Fetch.post({
        api:"api/auth/register",
        params:values,
        onThen:function(result){
          if(result.data == false){
          }else{   
            setCookies('token', result.data.value)  
            auth.handle.close();
          }
        },onError:function(error){
        }
      })
    }
  }

  return(
    <FormProvider onSubmit={handleSubmit}>
      <Stack spacing={1} sx={{
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
          placeholder="Xác thực mật khẩu"
        />
        <InputCheckbox 
          name="IsAgree" 
          label={
            <>Bạn đồng ý với 
            <Link underline="none" to="/"> điều khoản và chính sách sử dụng</Link>
            </>
          } 
        style={{marginRight:'0'}}/>
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