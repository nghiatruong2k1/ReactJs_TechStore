import { userEntity } from "~/entities/user";

export const loginAuthModel = {
  Email: userEntity.Email,
  Password: userEntity.Password
};
export const registerAuthModel = {
    Email: userEntity.Email,
    Password: userEntity.Password,
    RePassword: {
      displayName: 'Xác thực mật khẩu',
      rulers: {
        isRequired: ['Vui lòng nhập xác thực mật khẩu!'],
        isConfirm: ['Password', 'Xác thực mật khẩu không hợp lệ!'],
      },
    },
    IsAgree: {
      displayName: '',
      rulers: {
        isRequired: ['Vui lòng đọc và đồng ý điều khoản sử dụng!'],
      },
    },
  };
  export const forgetAuthModel = {
    Email: userEntity.Email
  };