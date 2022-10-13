export const loginAuthModel = {
  Email: {
    displayName: '',
    rulers: {
      isRequired: ['Vui lòng nhập Email!'],
      isEmail: [null, ['gmail.com']],
    },
  },
  Password: {
    displayName: '',
    rulers: {
      isRequired: ['Vui lòng nhập mật khẩu!'],
      minLength: [5],
    },
  }
};
export const registerAuthModel = {
    Email: {...loginAuthModel.Email},
    Password: {...loginAuthModel.Password},
    RePassword: {
      displayName: '',
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
    Email: {...loginAuthModel.Email}
  };