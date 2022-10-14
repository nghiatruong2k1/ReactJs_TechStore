import { imageEntity } from "~/entities/image";
import { sliderEntity } from "~/entities/slider";

export const sliderModel = {
    ...sliderEntity,
    ImageUrl: imageEntity.Url,
  };
  