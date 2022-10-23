import { memo } from 'react';
import { Stack, Typography } from '@mui/material/';
import { initCase } from '~/hooks/Auth/init';
import FormProvider from '../../components/FormProvider';
import InputText from '../../components/InputText';
import LinkSetAction from '../../components/LinkSetAction';
import SubmitButton from '../../components/SubmitButton';
import FacebookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/GoogleButton';
import { forgetAuthModel } from '~/models/auth';
import { getRulers } from '~/models';

const rules = getRulers(forgetAuthModel);
function FormForget() {
  return (
    <FormProvider rules={rules}>
      <Stack spacing={1}>
        <InputText name="Email" title="Email" placeholder="Nhập Email" />
        <SubmitButton disabled color="info">
          {' '}
          Gửi mã xác nhận{' '}
        </SubmitButton>
        <LinkSetAction
          component={Typography}
          action={initCase.TO_LOGIN}
          beforeText="Đăng nhập tài khoản khác ?"
          text="Đăng nhập"
        />
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
export default memo(FormForget);
