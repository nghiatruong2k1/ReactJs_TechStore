import { defaultEntity } from '../default';
import { productEntity } from '../product';
import { userEntity } from '../user';

export let orderStatusEntity = {
  Id: {
    ...defaultEntity.Id,
    displayName: 'Mã trạng thái',
  },
  Name: {
    displayName: 'Tên trạng thái',
  },
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
};
export let orderEntity = {
  Id: { ...defaultEntity.Id, displayName: 'Mã đơn hàng' },
  VoucherSale: {
    displayName: 'Giảm',
  },
  StatusId: orderStatusEntity.Id,
  UserId: userEntity.Id,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
  CreateDate: defaultEntity.CreateDate,
  UpdateDate: defaultEntity.UpdateDate,
};
export let orderDetailEntity = {
  Id: { ...defaultEntity.Id, displayName: 'Mã chi tiết đơn hàng' },
  Quantity: {
    displayName: 'Số lượng',
  },
  OrderId: orderEntity.Id,
  ProductId: productEntity.Id,
  Price: productEntity.Price,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
};
export let orderVoucherEntity = {
  Id: {
    ...defaultEntity.Id,
  },
  Name: {
    displayName: 'Tên mã giảm giá',
  },
  Code: {
    displayName: 'Mã giảm giá',
    rulers: {
      isRequired: ['Vui lòng nhập mã giảm giá'],
      isRegex: [/[^a-zA-Z0-9]/g, 'Mã giảm giá chỉ bao gồm a-z,A-Z,0-9'],
      isLength: [10, 'Mã giảm giá có độ dài {1} kí tự'],
    },
  },
  Value: {
    displayName: 'Giảm giá',
  },
  EndDate: {
    displayName: 'Ngày hết hạn',
  },
  CreateDate: defaultEntity.CreateDate,
  UpdateDate: defaultEntity.UpdateDate,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
};
