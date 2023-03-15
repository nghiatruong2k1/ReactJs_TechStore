import { ActionConfig, ControllerConfig } from '~/config/Controller';

export const ProductController = new ControllerConfig({
  detail: new ActionConfig(
    'Chi tiết sản phẩm',
    'chi-tiet-san-pham/:alias',
  ),
  category: new ActionConfig(
    'Danh mục sản phẩm',
    'danh-muc-san-pham/:alias',
  ),
  brand: new ActionConfig(
    'Thương hiệu sản phẩm',
    'thuong-hieu-san-pham/:alias',
  ),
  search: new ActionConfig(
    'Tìm kiếm sản phẩm',
    'tim-kiem-san-pham',
  ),
});
