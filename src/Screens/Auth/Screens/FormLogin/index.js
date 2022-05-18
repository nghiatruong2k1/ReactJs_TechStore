import {memo,useRef,useReducer,useContext,useMemo} from 'react';
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
import LinkTo from "../../Components/LinkTo/";
import SubmitButton from "../../Components/SubmitButton/";
import FacebookButton from "../../Components/FacebookButton/";
import GoogleButton from "../../Components/GoogleButton/";

import { useFetch } from '../../../../Config/Fetch/';

const rules = {
    Email:{
      isRequired:["Vui lòng nhập Email!"],
      isEmail:[null,["gmail.com"]]
    },Password:{
      isRequired:["Vui lòng nhập mật khẩu!"]
    }
}
function FormLogin({...props}){
  const Fetch = useFetch();
  const {auth,toast} = useContext(global.config.AppContext);

  function handleSubmit({Save,...values},handle){
    Fetch.post({
      api:"api/auth/login",
      params:values,
      onThen:function(result){
        console.log(result)
        if(result.data.value && result.data.token){
          auth.handle.login(result.data.value,result.data.token);
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
        px:{xs:0,sm:6,md:8,lg:12}
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
        <Stack direction="row" justifyContent = 'space-between' alignItems = 'center'> 
          <InputCheckbox name="Save" label="Lưu tài khoản"/>
          <LinkSetAction action="forgetPassword"text="Quên mật khẩu"/>
        </Stack>
        <SubmitButton> Đăng nhập </SubmitButton>
        <Typography>
          <LinkSetAction action="register" beforeText="Bạn chưa có tài khoản?" text="Đăng ký"/>
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