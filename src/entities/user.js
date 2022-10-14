import { defaultEntity } from './default';
import { imageEntity } from './image';
export let userTypeEntity = {
  Id: {
    displayName: 'Mã cấp bậc',
  },
  Name: {
    displayName: 'Tên cấp bậc',
  },
  Alias: {
    displayName: 'Định danh',
  },
  ShortDes: {
    displayName: 'Mô tả ngắn',
  },
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
};
export let userEntity = {
  Id: {
    displayName: 'Mã người dùng',
  },
  FirstName: {
    displayName: 'Họ',
  },
  LastName: {
    displayName: 'Tên',
  },
  Location: {
    displayName: 'Địa chỉ',
  },
  Phone: {
    displayName: 'Số điện thoại',
  },
  Email: {
    displayName: 'Email',
    rulers: {
      isRequired: ['Vui lòng nhập Email!'],
      isEmail: [null, ['gmail.com']],
    },
  },
  Password: {
    displayName: 'Mật khẩu',
    rulers: {
      isRequired: ['Vui lòng nhập mật khẩu!'],
      minLength: [5],
    },
  },
  ImageId: imageEntity.Id,
  TypeId: userTypeEntity.Id,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
  CreateDate: defaultEntity.CreateDate,
  UpdateDate: defaultEntity.UpdateDate,
};
