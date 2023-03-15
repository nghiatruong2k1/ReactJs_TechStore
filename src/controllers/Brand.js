import { ActionConfig, ControllerConfig } from '~/config/Controller';

export const BrandController = new ControllerConfig({
  index: new ActionConfig('Thương hiệu', 'danh-sach-thuong-hieu'),
  search: new ActionConfig('Tìm kiếm thương hiệu', 'tim-kiem-thuong-hieu'),
});
