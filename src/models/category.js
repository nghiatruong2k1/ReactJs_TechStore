import { categoryEntity } from "~/entities/category";
import { imageEntity } from "~/entities/image";



export const categoryModel = {
  ...categoryEntity,
  ImageUrl: {
    ...imageEntity.Url,
    displayName:'Hình ảnh'
  },
};
