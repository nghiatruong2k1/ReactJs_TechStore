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
function FormRegister({onClose, ...props }) {
  const authServices = AuthServices('form login');
  const handleSubmit = useCallback(({ Email, Password }) => {
    authServices.register({ Email, Password }, (data) => {
      if (data) {
        onClose && onClose();
      }
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
        <InputText name="Email" title="Email" placeholder="Nhập Email" />
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
              to={'#'}
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
