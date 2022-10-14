
import { defaultEntity } from '~/entities/default';
import { imageEntity } from '~/entities/image';
import { userEntity, userTypeEntity } from '~/entities/user';

export const userModel = {
 ...userEntity,
 ImageUrl:imageEntity.Url,
 TypeName:userTypeEntity.Name
};

export const userStatisModel = {
  CreateDate:defaultEntity.CreateDate,
  Total:{
      displayName:'Tổng'
  }
}