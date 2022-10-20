import { defaultEntity } from './default';

export let imageEntity = {
  Id: {
    ...defaultEntity.Id,
    displayName: 'Mã hình',
  },
  Name: {
    displayName: 'Tên hình',
    rulers: {
      isRequired: ['Vui lòng nhập tên hình!'],
      maxLength: [100],
    },
  },
  Alias: {
    displayName: 'Định danh',
  },
  Url: {
    displayName: 'Hình ảnh',
  },
  Size: {
    displayName: 'Kích thước',
    rulers: {
      isRequired: ['Vui lòng nhập kích thước hình!'],
      maxNumber: [5000,'Kích thước tối đa là {1} Bytes'],
    },
  },
  IsPublic: defaultEntity.IsPublic,
  IsTrash: defaultEntity.IsTrash,
  CreateDate: defaultEntity.CreateDate,
  UpdateDate: defaultEntity.UpdateDate,
};
