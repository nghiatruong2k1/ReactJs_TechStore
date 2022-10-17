
import { defaultEntity } from '~/entities/default';
import { brandEntity } from '~/entities/brand';
import { categoryEntity } from '~/entities/category';
import { imageEntity } from '~/entities/image';
import {orderEntity, orderDetailEntity, orderStatusEntity } from '~/entities/order';
import { productEntity, productTypeEntity,productRatingEntity } from '~/entities/product';
import { userEntity } from '~/entities/user';

export const orderModel = {
  ...orderEntity,
  FirstName: userEntity.FirstName,
  LastName: userEntity.LastName,
  Email: userEntity.Email,
  Phone: userEntity.Phone,
  Location: userEntity.Location,
  StatusName: {
    ...orderStatusEntity.Name,
    displayName:'Trạng thái'
  },
  TotalPrice: {
    displayName: 'Tổng thanh toán',
  },
};
export const orderDetailModel = {
  ...orderDetailEntity,
  Name: productEntity.Name,
  Alias: productEntity.Alias,
  TypeName: productTypeEntity.Name,
  Rating: productRatingEntity.Rating,
  ImageUrl: {
    ...imageEntity.Url,
    displayName:'Hình ảnh'
  },
  CategoryName: categoryEntity.Name,
  BrandName: brandEntity.Name,
};

export const orderStatisModel = {
    CreateDate:defaultEntity.CreateDate,
    StatusName:orderStatusEntity.Name,
    Total:{
        displayName:'Tổng'
    }
}