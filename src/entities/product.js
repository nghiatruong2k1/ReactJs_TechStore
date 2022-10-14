import { defaultEntity } from "./default";
import { brandEntity } from './brand';
import { categoryEntity } from './category';
import { imageEntity } from './image';
import { userEntity } from './user';



export let productTypeEntity  = {
  Id: {
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
    Id: {
      displayName: 'Mã sản phẩm',
    },
    Name: {
      displayName: 'Tên sản phẩm',
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
  export let productRatingEntity  = {
    Id: {
      displayName: 'Mã đánh giá',
    },
    Vote: { displayName: 'Đánh giá' },
    FullDes: { displayName: 'Mô tả' },
    ProductId: productEntity.Id,
    UserId: userEntity.Id,
    IsPublic: defaultEntity.IsPublic,
    IsTrash: defaultEntity.IsTrash,
    CreateDate: defaultEntity.CreateDate,
    UpdateDate: defaultEntity.UpdateDate,
  };
  export let productImageEntity  = {
    Id: {
      displayName: 'Id',
    },
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