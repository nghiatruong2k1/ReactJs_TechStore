import { memo, useMemo } from 'react';
import { registerAuthModel } from '~/models/auth';
let idmailer = `body-mailer-${process.env.REACT_APP_WEBSITE_NAME}`;
function PaymentMail({ Email, Password }) {
  const url = useMemo(() => {
    return 'confirm';
  }, []);
  return (
    <div id={idmailer}>
      <div>
        <h5>Xin chào</h5>
        <h6>Bạn có 1 tài khoản chờ xác nhận</h6>
      </div>
      <hr style={{ border: '1px solid black', opacity: 0.8 }} />
      <div>
        <p>
          Email của bạn vừa được đăng ký tại{' '}
          <a href={window.location.origin}>
            {process.env.REACT_APP_WEBSITE_NAME}
          </a>
        </p>
        <p>
          {registerAuthModel.Email.displayName}:{Email}
        </p>
        <p>
          {registerAuthModel.Password.displayName}:{Password}
        </p>

        <p>Vui lòng xác nhận đây là bạn:</p>
        <p>
          <a href={url}>{url}</a>
        </p>
      </div>
    </div>
  );
}
export default memo(PaymentMail);
