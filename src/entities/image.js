import { defaultEntity } from "./default";

export let imageEntity = {
  Id: {
    displayName: 'Mã hình',
  },
  Name: {
    displayName: 'Tên hình',
  },
  Alias: {
    displayName: 'Định danh',
  },
  Url: {
    displayName: 'Đường dẫn',
  },
  Size: {
    displayName: 'Kích thước',
  },
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
};
