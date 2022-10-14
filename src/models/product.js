import { brandEntity } from "~/entities/brand";
import { categoryEntity } from "~/entities/category";
import { imageEntity } from "~/entities/image";
import { productEntity, productImageEntity, productRatingEntity, productTypeEntity } from "~/entities/product";


export const productModel = {
  ...productEntity,
  CategoryName: categoryEntity.Name,
  BrandName: brandEntity.Name,
  ImageUrl: imageEntity.Url,
  Rating: productRatingEntity.Rating,
  TypeName: productTypeEntity.Name,
};

export const productImageModel = {
  ...productImageEntity,
  ImageUrl: imageEntity.Url,
};
