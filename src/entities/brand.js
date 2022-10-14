import { defaultEntity } from "./default";
import { imageEntity } from "./image";

export let brandEntity = {
    Id: {
      displayName: 'Mã thương hiệu',
    },
    Name: {
      displayName: 'Tên thương hiệu',
    },
    Alias: {
      displayName: 'Định danh',
    },
    IsPopular:{
        displayName: 'Đề cử',
    },
    ImageId: imageEntity.Id,
    IsPublic: defaultEntity.IsPublic,
    IsTrash: defaultEntity.IsTrash,
  };
  