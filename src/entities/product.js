import { defaultEntity } from './default';
import { brandEntity } from './brand';
import { categoryEntity } from './category';
import { imageEntity } from './image';
import { userEntity } from './user';

export let productTypeEntity = {
  Id: {
    ...defaultEntity.Id,
    displayName: 'Mã loại',
  },
  Name: {
    displayName: 'Tên loại',
  },
  Alias: {
    displayName: 'Định danh',
  },
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
};

export let productEntity = {
  Id: { ...defaultEntity.Id, displayName: 'Mã sản phẩm' },
  Name: {
    displayName: 'Tên sản phẩm',
    rulers: {
      isRequired: ['Vui lòng nhập tên sản phẩm!'],
      maxLength: [200],
    },
  },
  Alias: {
    displayName: 'Định danh',
  },
  Price: {
    displayName: 'Giá',
  },
  SalePrice: {
    displayName: 'Giảm giá',
  },
  CurrencyUnit: {
    displayName: 'Đơn giá',
  },
  ShortDes: {
    displayName: 'Mô tả ngắn',
    rulers: {
      isRequired: ['Vui lòng nhập mô tả ngắn!'],
      maxLength: [200],
    },
  },
  FullDes: {
    displayName: 'Mô tả',
  },
  Properties: {
    displayName: 'Thuộc tính',
  },
  TypeId: productTypeEntity.Id,
  CategoryId: categoryEntity.Id,
  BrandId: brandEntity.Id,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
  CreateDate: defaultEntity.CreateDate,
  UpdateDate: defaultEntity.UpdateDate,
};
export let productRatingEntity = {
  Id: { ...defaultEntity.Id, displayName: 'Mã đánh giá' },
  Vote: { displayName: 'Đánh giá' },
  FullDes: { displayName: 'Mô tả' },
  ProductId: productEntity.Id,
  UserId: userEntity.Id,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
  CreateDate: defaultEntity.CreateDate,
  UpdateDate: defaultEntity.UpdateDate,
};
export let productImageEntity = {
  Id: { ...defaultEntity.Id, displayName: 'Id' },
  Alt: {
    displayName: 'Mô tả',
  },
  IsDefault: {
    displayName: 'Mặc định',
  },
  ProductId: productEntity.Id,
  ImageId: imageEntity.Id,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
};
