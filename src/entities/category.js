import { defaultEntity } from './default';
import { imageEntity } from './image';

export let categoryEntity = {
  Id: {
    ...defaultEntity.Id,
    displayName: 'Mã danh mục',
  },
  Name: {
    displayName: 'Tên danh mục',
    rulers: {
      isRequired: ['Vui lòng nhập tên danh mục!'],
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
