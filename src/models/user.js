
import { defaultEntity } from '~/entities/default';
import { imageEntity } from '~/entities/image';
import { userEntity, userTypeEntity } from '~/entities/user';

export const userModel = {
 ...userEntity,
 ImageUrl: {
  ...imageEntity.Url,
  displayName:'Hình đại diện'
},
 TypeName:{
  ...userTypeEntity.Name,
  displayName:'Cấp bậc'
 }
};

export const userStatisModel = {
  CreateDate:defaultEntity.CreateDate,
  Total:{
      displayName:'Tổng'
  }
}