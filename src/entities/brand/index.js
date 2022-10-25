import { defaultEntity } from '../default';
import { imageEntity } from '../image';

export let brandEntity = {
  Id: {
    ...defaultEntity.Id,
    displayName: 'Mã thương hiệu',
  },
  Name: {
    displayName: 'Tên thương hiệu',
    rulers: {
      isRequired: ['Vui lòng nhập tên thương hiệu!'],
      maxLength: [100],
    },
  },
  Alias: {
    displayName: 'Định danh',
  },
  IsPopular: {
    displayName: 'Đề cử',
  },
  ImageId: imageEntity.Id,
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
  CreateDate: defaultEntity.CreateDate,
  UpdateDate: defaultEntity.UpdateDate,
};
