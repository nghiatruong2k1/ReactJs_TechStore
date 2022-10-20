import { brandEntity } from "~/entities/brand";
import { categoryEntity } from "~/entities/category";
import { imageEntity } from "~/entities/image";
import { productEntity, productImageEntity, productRatingEntity, productTypeEntity } from "~/entities/product";


export const productModel = {
  ...productEntity,
  CategoryName: categoryEntity.Name,
  BrandName: brandEntity.Name,
  ImageUrl: {
    ...imageEntity.Url,
    displayName:'Hình ảnh'
  },
  Rating: {
    displayName:'Đánh giá'
  },
  TypeName: productTypeEntity.Name,
};

export const productImageModel = {
  ...productImageEntity,
  ImageUrl: {
    ...imageEntity.Url,
    displayName:'Hình ảnh'
  },
};
