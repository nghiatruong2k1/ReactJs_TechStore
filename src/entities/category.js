import { defaultEntity } from './default';
import { imageEntity } from './image';

export let categoryEntity = {
  Id: {
    displayName: 'Mã danh mục',
  },
  Name: {
    displayName: 'Tên danh mục',
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
