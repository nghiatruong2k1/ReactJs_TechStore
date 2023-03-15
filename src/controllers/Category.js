import { ActionConfig, ControllerConfig } from '~/config/Controller';
export const CategoryController = new ControllerConfig({
  index: new ActionConfig('Danh mục', 'danh-sach-danh-muc'),
  search: new ActionConfig('Tìm kiếm danh mục', 'tim-kiem-danh-muc'),
});
