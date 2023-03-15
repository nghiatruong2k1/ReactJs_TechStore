import { defaultEntity } from "./default";
import { imageEntity } from "./image";

export let sliderEntity = {
  Id: {
    ...defaultEntity.Id,
    displayName: 'Id',
  },
  Alt: {
    displayName: 'Mô tả',
  },
  ImageId: imageEntity.Id,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
};
