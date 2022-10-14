import { brandEntity } from "~/entities/brand";
import { imageEntity } from "~/entities/image";

export const brandModel = {
  ...brandEntity,
  ImageUrl: imageEntity.Url,
};
