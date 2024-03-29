import { memo, useCallback } from 'react';
import { Stack, Typography } from '@mui/material/';
import { initCase } from '~/hooks/Auth/init';
import { AuthServices, MailerServices } from '~/services';
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
import { useSnackbar } from 'notistack';
import FormRegisterMail from './FormRegisterMail';

const rules = getRulers(registerAuthModel);
function FormRegister({ onClose }) {
  const authServices = AuthServices('form register');
  const mailerServices = MailerServices('form register');
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = useCallback(({ Email, Password }, onEnd) => {
    authServices.register(
      { Email, Password },
      (data) => {
        if (data) {
          onClose && onClose();
          const Content = (
            <FormRegisterMail Email={Email} Password={Password} />
          );
          mailerServices.send(
            {
              content: Content,
              subject: 'Bạn có 1 tài khoản cần xác nhận',
              user: { Email },
            },
            () => {
              enqueueSnackbar({
                message: 'Đã gửi xác thực tài khoản đến Email của bạn!',
                type: 'success',
              });
            },
            () => {},
          );
        }
      },
      onEnd,
    );
  }, []);
  return (
    <FormProvider onSubmit={handleSubmit} rules={rules}>
      <Stack spacing={1}>
        <InputText
          name="Email"
          title={registerAuthModel.Email.displayName}
          placeholder={`Nhập ${registerAuthModel.Email.displayName}`}
        />
        <InputPassword
          name="Password"
          title={registerAuthModel.Password.displayName}
          placeholder={`Nhập ${registerAuthModel.Password.displayName}`}
        />
        <InputPassword
          name="RePassword"
          title={registerAuthModel.RePassword.displayName}
          placeholder={`Nhập ${registerAuthModel.RePassword.displayName}`}
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
