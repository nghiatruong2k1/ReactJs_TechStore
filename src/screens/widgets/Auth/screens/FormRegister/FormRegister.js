import { memo, useCallback } from 'react';
import { Stack, Typography } from '@mui/material/';
import { initCase } from '~/hooks/Auth/init';
import { AuthServices } from '~/services';
import LinkTo from '../../components/LinkTo';
import FormProvider from '../../components/FormProvider';
import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';
import InputCheckbox from '../../components/InputCheckbox';
import LinkSetAction from '../../components/LinkSetAction';
import SubmitButton from '../../components/SubmitButton';
import FacebookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/GoogleButton';
import { registerAuthModel } from '~/models/auth';
import { getRulers } from '~/models';

const rules = getRulers(registerAuthModel);
function FormRegister({ onClose }) {
  const authServices = AuthServices('form login');
  const handleSubmit = useCallback(({ Email, Password },onEnd) => {
    authServices.register({ Email, Password }, (data) => {
      if (data) {
        onClose && onClose();
      }
      console.log(data)
      onEnd && onEnd();
    });
  }, []);
  return (
    <FormProvider onSubmit={handleSubmit} rules={rules}>
      <Stack
        spacing={1}
        sx={{
          px: { xs: 0, sm: 6, md: 8, lg: 10 },
          py: 1,
        }}
      >
        <InputText
          name="Email"
          title={registerAuthModel.Password.displayName}
          placeholder={`Nhập ${registerAuthModel.Password.displayName}`}
        />
        <InputPassword
          name="Password"
          title={registerAuthModel.Password.displayName}
          placeholder={`Nhập ${registerAuthModel.Password.displayName}`}
        />
        <InputPassword
          name="RePassword"
          title={registerAuthModel.Password.displayName}
          placeholder={`Nhập ${registerAuthModel.Password.displayName}`}
        />
        <InputCheckbox
          name="IsAgree"
          label={
            <LinkTo
              beforeText="Bạn đồng ý với"
              text="điều khoản và chính sách sử dụng"
            />
          }
        />
        <SubmitButton color="info"> Đăng ký </SubmitButton>
        <LinkSetAction
          component={Typography}
          beforeText="Bạn đã có tài khoản?"
          text="Đăng nhập"
          action={initCase.TO_LOGIN}
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
export default memo(FormRegister);
