import {memo} from 'react';
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
function FormForget({...props}){
  return(
    <FormProvider>
      <Stack spacing={2} 
        sx={{
          px:{
            xs:0,
            sm:6,
            md:8,
            lg:12
          }
        }}
      >
        <InputEmail 
          placeholder="Nhập Email"
        />
        <SubmitButton> Gửi mã xác nhận </SubmitButton>
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
export default memo(FormForget);