import { memo, useCallback } from 'react';
import { Stack, Typography } from '@mui/material/';
import { initCase } from '~/hooks/Auth/init';
import FormProvider from '../../components/FormProvider';
import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';
import InputCheckbox from '../../components/InputCheckbox';
import LinkSetAction from '../../components/LinkSetAction';
import SubmitButton from '../../components/SubmitButton';
import FacebookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/GoogleButton';
import { AuthServices } from '~/services';
import { loginAuthModel } from '~/models/auth';
import { getRulers } from '~/models';

const rules = getRulers(loginAuthModel);
function FormLogin({ onClose }) {
  const authServices = AuthServices('form login');
  const handleSubmit = useCallback(({ Email, Password },onEnd) => {
    authServices.login({ Email, Password }, (data) => {
      if (data) {
        onClose && onClose();
      }
    },onEnd);
  }, []);
  return (
    <FormProvider onSubmit={handleSubmit} rules={rules}>
      <Stack
        spacing={1}
        sx={{
          px: { xs: 0, sm: 3, md: 6, lg: 12 },
          py: 1,
        }}
      >
        <InputText
          name="Email"
          title={loginAuthModel.Email.displayName}
          placeholder={`Nhập ${loginAuthModel.Email.displayName}`}
        />
        <InputPassword
          name="Password"
          title={loginAuthModel.Password.displayName}
          placeholder={`Nhập ${loginAuthModel.Password.displayName}`}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <InputCheckbox name="Save" label="Lưu tài khoản" />
          <LinkSetAction action={initCase.TO_FORGET} text="Quên mật khẩu" />
        </Stack>
        <SubmitButton color="info"> Đăng nhập </SubmitButton>
        <LinkSetAction
          component={Typography}
          action={initCase.TO_REGISTER}
          beforeText="Bạn chưa có tài khoản?"
          text="Đăng ký"
        />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <FacebookButton />
          <GoogleButton />
        </Stack>
      </Stack>
    </FormProvider>
  );
}
export default memo(FormLogin);
